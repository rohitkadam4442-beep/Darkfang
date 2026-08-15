// Data store remains the same, simulating a database structure
const carsData = {
    kiger: {
        name: "Renault Kiger",
        price: "₹6.30 - 11.30 Lakh*",
        image: "https://i.ibb.co/6803h72/kiger-main.jpg",
        specs: {
            Engine: "999 cc",
            Power: "71 - 99 bhp",
            Torque: "96 - 160 Nm",
            Seating: "5",
            Mileage: "17.63 - 20.38 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Kiger Authentic MT", price: "₹6.30 Lakh*" },
            { name: "Kiger Evolution MT", price: "₹7.10 Lakh*" },
            { name: "Kiger Techno MT", price: "₹8.20 Lakh*" },
            { name: "Kiger Emotion Turbo MT", price: "₹10.00 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6803h72/kiger-main.jpg",
            "https://i.ibb.co/R2tW2w8/kiger-back.jpg",
            "https://i.ibb.co/2dy7B6T/kiger-side.jpg",
            "https://i.ibb.co/61B1Lgh/kiger-interior1.jpg",
            "https://i.ibb.co/6N6d2kR/kiger-interior2.jpg"
        ],
        description: "The Renault Kiger is a compact SUV that offers a bold design, a spacious cabin, and a choice of two petrol engines. It comes with a range of modern features and has a 4-star Global NCAP safety rating."
    },
    triber: {
        name: "Renault Triber",
        price: "₹6.30 - 9.40 Lakh*",
        image: "https://i.ibb.co/pLg0J0h/triber-main.jpg",
        specs: {
            Engine: "999 cc",
            Power: "71.01 bhp",
            Torque: "96 Nm",
            Seating: "7",
            Mileage: "17.0 - 20.0 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Triber Authentic", price: "₹6.30 Lakh*" },
            { name: "Triber Evolution", price: "₹7.25 Lakh*" },
            { name: "Triber Techno", price: "₹8.00 Lakh*" },
            { name: "Triber Emotion", price: "₹8.65 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/pLg0J0h/triber-main.jpg",
            "https://i.ibb.co/n7W3yWd/triber-back.jpg",
            "https://i.ibb.co/m0fJ5cM/triber-side.jpg",
            "https://i.ibb.co/d7Xh1fD/triber-interior1.jpg",
            "https://i.ibb.co/sKq7qJ4/triber-interior2.jpg"
        ],
        description: "The Renault Triber is a versatile 7-seater MPV known for its modular seating and impressive space management. It's a practical and affordable family car with a good list of features."
    },
    kwid: {
        name: "Renault Kwid",
        price: "₹4.70 - 6.45 Lakh*",
        image: "https://i.ibb.co/F82f0w5/kwid-main.jpg",
        specs: {
            Engine: "999 cc",
            Power: "67.06 bhp",
            Torque: "91 Nm",
            Seating: "5",
            Mileage: "21.46 - 22.3 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Kwid RXE", price: "₹4.70 Lakh*" },
            { name: "Kwid RXL(O)", price: "₹5.10 Lakh*" },
            { name: "Kwid RXT", price: "₹5.55 Lakh*" },
            { name: "Kwid Climber", price: "₹5.88 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/F82f0w5/kwid-main.jpg",
            "https://i.ibb.co/4P2Q6gP/kwid-back.jpg",
            "https://i.ibb.co/Rps8R2z/kwid-side.jpg",
            "https://i.ibb.co/k2D7Y8G/kwid-interior1.jpg",
            "https://i.ibb.co/8b7J2pM/kwid-interior2.jpg"
        ],
        description: "The Renault Kwid is a popular entry-level hatchback with SUV-inspired styling, a high ground clearance, and a modern feature list, making it an attractive option for first-time car buyers."
    }
};
/**
 * Loads and displays the detailed information of a car based on the URL parameter 'id'.
 */
function loadCarDetail() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const carId = urlParams.get('id');

        const car = carsData[carId];

        if (car) {
            // Main fields
            document.getElementById("carName").textContent = car.name;
            document.getElementById("carPrice").textContent = car.price;
            document.getElementById("carDescription").textContent = car.description;
            document.getElementById("carImage").src = car.image;

            // Specs
            const specsGrid = document.getElementById("carSpecs");
            specsGrid.innerHTML = '';
            for (const key in car.specs) {
                let div = document.createElement("div");
                div.className = "spec-item";
                div.innerHTML = `<h4>${key}</h4><p>${car.specs[key]}</p>`;
                specsGrid.appendChild(div);
            }

            // Variants
            const variantsGrid = document.getElementById("carVariants");
            variantsGrid.innerHTML = '';
            car.variants.forEach(v => {
                let div = document.createElement("div");
                div.className = "spec-item";
                div.innerHTML = `<h4>${v.name}</h4><p>${v.price}</p>`;
                variantsGrid.appendChild(div);
            });

            // Thumbnails
            const thumbContainer = document.getElementById("carThumbnails");
            thumbContainer.innerHTML = '';
            car.thumbnails.forEach(src => {
                let img = document.createElement("img");
                img.src = src;
                img.onclick = () => document.getElementById("carImage").src = src;
                thumbContainer.appendChild(img);
            });

        } else {
            document.body.innerHTML = "<h2>Car not found!</h2>";
        }
    } catch (error) {
        console.error("Failed to load car details:", error);
        document.body.innerHTML = "<h2>Error loading car data. Please try again.</h2>";
    }
}

// Ensure this function runs when the detail page loads
if (document.getElementById("carName")) {
    window.addEventListener('load', loadCarDetail);
}