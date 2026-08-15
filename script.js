// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inquiry-form');
    const statusElement = document.getElementById('form-status');
    const SERVER_URL = 'http://localhost:3000'; // Target the Node.js server

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Basic validation
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            statusElement.textContent = 'Sending inquiry...';
            statusElement.className = ''; // Clear previous status styles

            const formData = {
                fullName: form.fullName.value,
                email: form.email.value,
                phone: form.phone.value,
                interest: form.interest.value,
                message: form.message.value,
            };

            try {
                const response = await fetch(`${SERVER_URL}/api/inquiry`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (response.ok) {
                    statusElement.textContent = result.message;
                    statusElement.classList.add('success'); 
                    form.reset(); 
                } else {
                    statusElement.textContent = `Error: ${result.error || 'Submission failed.'}`;
                    statusElement.classList.add('error'); 
                }
            } catch (error) {
                statusElement.textContent = 'Network error. Could not connect to the server.';
                statusElement.classList.add('error');
                console.error('Fetch Error:', error);
            }
        });
    }
});