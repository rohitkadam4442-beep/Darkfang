// Data store remains the same, simulating a database structure
const carsData = {
    magnite: {
        name: "Nissan Magnite",
        price: "₹6.14 - 11.76 Lakh*",
        image: "https://i.ibb.co/6803h72/kiger-main.jpg", // Placeholder - need a real Magnite image
        specs: {
            Engine: "999 cc",
            Power: "71 - 99 bhp",
            Torque: "96 - 160 Nm",
            Seating: "5",
            Mileage: "17.9 - 24 kmpl/kg",
            Drive: "FWD"
        },
        variants: [
            { name: "Magnite Visia", price: "₹6.14 Lakh*" },
            { name: "Magnite Acenta", price: "₹7.29 Lakh*" },
            { name: "Magnite Kuro Edition", price: "₹8.30 Lakh*" },
            { name: "Magnite Tekna Plus", price: "₹9.27 Lakh*" },
            { name: "Magnite Tekna Plus Turbo CVT", price: "₹11.76 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6803h72/kiger-main.jpg", // Placeholder
            "https://i.ibb.co/R2tW2w8/kiger-back.jpg", // Placeholder
            "https://i.ibb.co/2dy7B6T/kiger-side.jpg", // Placeholder
            "https://i.ibb.co/61B1Lgh/kiger-interior1.jpg", // Placeholder
            "https://i.ibb.co/6N6d2kR/kiger-interior2.jpg" // Placeholder
        ],
        description: "The Nissan Magnite is a subcompact SUV known for its aggressive styling, feature-rich cabin, and value-for-money proposition. It is available with both naturally aspirated and turbocharged petrol engines, and also offers a CNG option."
    },
    x_trail: {
        name: "Nissan X-Trail",
        price: "₹49.92 Lakh*",
        image: "https://i.ibb.co/S7q8tPz/meridian-main.jpg", // Placeholder
        specs: {
            Engine: "1498 cc",
            Power: "161 bhp",
            Torque: "NA",
            Seating: "7",
            Mileage: "10 kmpl",
            Drive: "FWD" // Note: Some sources say 4WD is available in other markets, but FWD seems to be the one for the new model in India.
        },
        variants: [
            { name: "X-Trail", price: "₹49.92 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/S7q8tPz/meridian-main.jpg", // Placeholder
            "https://i.ibb.co/5c1k92P/meridian-back.jpg", // Placeholder
            "https://i.ibb.co/2N3J4Nf/meridian-side.jpg", // Placeholder
            "https://i.ibb.co/k2V7B2M/meridian-interior1.jpg", // Placeholder
            "https://i.ibb.co/d6d7J8V/meridian-interior2.jpg" // Placeholder
        ],
        description: "The Nissan X-Trail is a premium 7-seater SUV that was recently brought back to the Indian market. It offers a sophisticated design, advanced features, and a spacious interior for a comfortable ride."
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