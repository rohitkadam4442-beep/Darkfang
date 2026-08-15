// =========================================================
// Unified Server for Booking, Login Tracking, and Contact Inquiries
// =========================================================

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
const PORT = 3000;

// --- Middleware ---
app.use(cors()); 
app.use(express.json()); 

// --- Database Connection ---
// Connecting to 'royal_car_db' to consolidate all data
mongoose.connect('mongodb://localhost/royal_car_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB: royal_car_db'))
  .catch(err => console.error('❌ Could not connect to MongoDB...', err));

// =========================================================
// --- 1. Schemas & Models (Booking Management) ---
// =========================================================

const bookingSchema = new mongoose.Schema({
    receiptId: { type: String, required: true, unique: true },
    carId: { type: String, required: true },
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    deliveryDate: { type: Date, required: true },
    bookingDate: { type: Date, default: Date.now },
    amountPaid: { type: Number, default: 50000 }, 
    estimatedBalance: { type: Number, required: true },
    estimatedBasePrice: { type: Number, required: true },
    estimatedTaxes: { type: Number, required: true },
    // ADDED: Status field for admin management
    status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' } 
});
const Booking = mongoose.model('Booking', bookingSchema);


// =========================================================
// --- 2. Schemas & Models (Login Tracking) ---
// =========================================================

const loginSchema = new mongoose.Schema({ 
    username: { type: String, required: true }, 
    role: { type: String, enum: ['user', 'admin'], required: true }, 
    loginAt: { type: Date, default: Date.now } 
});
const LoginEntry = mongoose.model('LoginEntry', loginSchema); 


// =========================================================
// --- 3. Schemas & Models (Contact Inquiry) --- 
// =========================================================

const inquirySchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    interest: { type: String, required: true },
    message: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
    isReviewed: { type: Boolean, default: false },
    // --- NEW FIELDS FOR ADMIN REPLY ---
    adminReply: { type: String, default: null }, 
    repliedAt: { type: Date, default: null }
});
const ContactInquiry = mongoose.model('ContactInquiry', inquirySchema);


// =========================================================
// --- 4. API Endpoints (Contact Inquiry Management) ---
// =========================================================

// Endpoint for the public website to submit a contact form
app.post('/api/inquiry', async (req, res) => {
    const { fullName, email, phone, interest, message } = req.body;

    if (!fullName || !email || !phone || !interest || !message) {
        return res.status(400).send({ error: 'All contact inquiry fields are required.' });
    }

    try {
        const newInquiry = new ContactInquiry({ fullName, email, phone, interest, message });
        await newInquiry.save();
        res.status(201).send({ message: 'Inquiry submitted successfully. We will contact you shortly.' });
    } catch (error) {
        console.error("Error saving inquiry:", error);
        res.status(500).send({ error: 'Failed to save inquiry to the database.' });
    }
});

// Endpoint for the Admin to retrieve all inquiries
app.get('/api/inquiries', async (req, res) => {
    try {
        // Fetch all inquiries, sorted by submission date (newest first)
        const inquiries = await ContactInquiry.find().sort({ submittedAt: -1 });
        res.json(inquiries);
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        res.status(500).json({ message: 'Server error fetching contact inquiries.' });
    }
});

// --- NEW: Endpoint to handle Admin Reply (PUT) ---
app.put('/api/inquiry/:id/reply', async (req, res) => {
    const { adminReply } = req.body;
    const inquiryId = req.params.id;

    if (!adminReply) {
        return res.status(400).send({ error: 'Reply content is required.' });
    }

    try {
        const updatedInquiry = await ContactInquiry.findByIdAndUpdate(
            inquiryId,
            { 
                adminReply: adminReply, 
                repliedAt: Date.now(),
                isReviewed: true // Mark as reviewed
            },
            { new: true, runValidators: true }
        );

        if (!updatedInquiry) {
            return res.status(404).send({ error: 'Inquiry not found.' });
        }

        res.send({ message: 'Reply submitted successfully.', inquiry: updatedInquiry });
    } catch (error) {
        console.error('Error updating inquiry with reply:', error);
        res.status(500).send({ error: 'Failed to update inquiry with reply.' });
    }
});

// --- NEW: Endpoint to Delete an Inquiry (DELETE) ---
app.delete('/api/inquiry/:id', async (req, res) => {
    try {
        const deletedInquiry = await ContactInquiry.findByIdAndDelete(req.params.id);

        if (!deletedInquiry) {
            return res.status(404).send({ error: 'Inquiry not found.' });
        }

        res.send({ message: 'Inquiry successfully deleted.' });
    } catch (error) {
        console.error('Error deleting inquiry:', error);
        res.status(500).send({ error: 'Failed to delete inquiry from database.' });
    }
});

// =========================================================
// --- 5. API Endpoints (Booking & Login Management) ---
// =========================================================

// POST: Create a new booking
app.post('/api/bookings', async (req, res) => {
    const { carId, name, phone, deliveryDate, estimatedBalance, estimatedBasePrice, estimatedTaxes } = req.body;

    if (!carId || !name || !phone || !deliveryDate || estimatedBalance === undefined) {
        return res.status(400).send({ error: 'Missing required booking fields.' });
    }

    try {
        const newReceiptId = `RC-${Date.now().toString().slice(-8)}`; 
        const newBooking = new Booking({
            receiptId: newReceiptId, carId: carId, customerName: name, customerPhone: phone,
            deliveryDate: new Date(deliveryDate), estimatedBalance: estimatedBalance,
            estimatedBasePrice: estimatedBasePrice, estimatedTaxes: estimatedTaxes
        });
        await newBooking.save();
        res.status(201).send({ message: 'Booking confirmed and saved.', receiptId: newReceiptId });
    } catch (error) {
        console.error("Error saving booking:", error);
        res.status(500).send({ error: 'Failed to process booking.' });
    }
});

// GET: Fetch ALL bookings (Admin Dashboard use)
// This is the endpoint the admin_bookings.html should be hitting.
app.get('/api/bookings', async (req, res) => {
    try {
        // Fetch all bookings, sorted by latest booking date
        const bookings = await Booking.find().sort({ bookingDate: -1 }); 
        res.json(bookings);
    } catch (err) {
        console.error('Error fetching all bookings:', err);
        res.status(500).json({ message: 'Server error fetching bookings.' });
    }
});


// PATCH: Update booking status (Admin Dashboard action)
app.patch('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    // Validate the status update request
    if (!status || !['Pending', 'Confirmed', 'Cancelled'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status provided.' });
    }

    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            { status: status },
            { new: true, runValidators: true } // Return the updated document and run validation
        );

        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found.' });
        }
        
        res.json(updatedBooking);
    } catch (err) {
        console.error('Error updating booking status:', err);
        res.status(500).json({ message: 'Server error updating booking status.' });
    }
});


// GET: Fetch single booking by Receipt ID (User use)
app.get('/api/bookings/:receiptId', async (req, res) => {
    try {
        // Find by receiptId instead of MongoDB _id for user lookup
        const booking = await Booking.findOne({ receiptId: req.params.receiptId });
        if (!booking) { return res.status(404).send({ error: 'Booking not found.' }); }
        res.send(booking);
    } catch (error) {
        console.error("Error fetching booking:", error);
        res.status(500).send({ error: 'Error fetching booking details.' });
    }
});

app.post('/api/login', async (req, res) => { 
    try {
        const { username, role } = req.body; 
        if (!username || !role) { return res.status(400).json({ message: 'Username and role are required.' }); }

        const newEntry = new LoginEntry({ username, role }); 
        await newEntry.save(); 
        res.status(201).json({ message: 'Login recorded successfully by Analytics Server.' }); 
    } catch (error) { 
        console.error('Error recording login:', error); 
        res.status(500).json({ message: 'Server error during login recording.' }); 
    }
});

app.get('/api/logins/summary', async (req, res) => { 
    try {
        const summary = await LoginEntry.aggregate([ 
            { $sort: { loginAt: 1 } }, 
            { $group: {
                    _id: { username: '$username', role: '$role' }, 
                    loginCount: { $sum: 1 }, 
                    lastLoginAt: { $last: '$loginAt' } 
                }
            },
            { $project: { _id: 0, username: '$_id.username', role: '$_id.role', loginCount: '$loginCount', lastLoginAt: '$lastLoginAt' } },
            { $sort: { lastLoginAt: -1 } } 
        ]);
        res.json(summary); 
    } catch (error) { 
        console.error('Error fetching login summary:', error); 
        res.status(500).json({ message: 'Server error fetching summary.' }); 
    }
});


// =========================================================
// --- 6. Start Server ---
// =========================================================

app.listen(PORT, () => console.log(`Unified Royal Car Server running on http://localhost:${PORT}`));
