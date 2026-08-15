// Data store remains the same, simulating a database structure
const carsData = {
    compass: {
        name: "Jeep Compass",
        price: "₹18.99 - 32.41 Lakh*",
        image: "https://i.ibb.co/C2n1h6w/compass-main.jpg",
        specs: {
            Engine: "1956 cc",
            Power: "168 bhp",
            Torque: "350 Nm",
            Seating: "5",
            Mileage: "14.9 kmpl",
            Drive: "FWD/4WD"
        },
        variants: [
            { name: "Compass Sport", price: "₹18.99 Lakh*" },
            { name: "Compass Longitude", price: "₹22.33 Lakh*" },
            { name: "Compass Limited (O)", price: "₹26.33 Lakh*" },
            { name: "Compass Model S (O)", price: "₹28.33 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/C2n1h6w/compass-main.jpg",
            "https://i.ibb.co/qD8426j/compass-back.jpg",
            "https://i.ibb.co/Wc6396h/compass-side.jpg",
            "https://i.ibb.co/8Yj052M/compass-interior1.jpg",
            "https://i.ibb.co/L5hY5Fk/compass-interior2.jpg"
        ],
        description: "The Jeep Compass is a rugged and capable 5-seater SUV. It is known for its strong off-roading capabilities, premium interiors, and solid build quality. It is a popular choice in the mid-size SUV segment."
    },
    meridian: {
        name: "Jeep Meridian",
        price: "₹24.99 - 38.79 Lakh*",
        image: "https://i.ibb.co/S7q8tPz/meridian-main.jpg",
        specs: {
            Engine: "1956 cc",
            Power: "168 bhp",
            Torque: "350 Nm",
            Seating: "7",
            Mileage: "14.1 kmpl",
            Drive: "FWD/4WD"
        },
        variants: [
            { name: "Meridian Longitude", price: "₹24.99 Lakh*" },
            { name: "Meridian Limited (O)", price: "₹30.79 Lakh*" },
            { name: "Meridian Trail Edition", price: "₹31.27 Lakh*" },
            { name: "Meridian Overland", price: "₹36.79 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/S7q8tPz/meridian-main.jpg",
            "https://i.ibb.co/5c1k92P/meridian-back.jpg",
            "https://i.ibb.co/2N3J4Nf/meridian-side.jpg",
            "https://i.ibb.co/k2V7B2M/meridian-interior1.jpg",
            "https://i.ibb.co/d6d7J8V/meridian-interior2.jpg"
        ],
        description: "The Jeep Meridian is a 7-seater SUV that combines the brand's legendary off-road DNA with premium comfort and a spacious cabin. It is a family-oriented SUV that doesn't compromise on performance."
    },
    wrangler: {
        name: "Jeep Wrangler",
        price: "₹67.65 - 71.65 Lakh*",
        image: "https://i.ibb.co/2d1Lh6J/wrangler-main.jpg",
        specs: {
            Engine: "1995 cc",
            Power: "268.2 bhp",
            Torque: "400 Nm",
            Seating: "5",
            Mileage: "10.6 - 11.4 kmpl",
            Drive: "4WD"
        },
        variants: [
            { name: "Wrangler Unlimited", price: "₹67.65 Lakh*" },
            { name: "Wrangler Rubicon", price: "₹71.65 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/2d1Lh6J/wrangler-main.jpg",
            "https://i.ibb.co/0V1n4bF/wrangler-back.jpg",
            "https://i.ibb.co/R8W1p6s/wrangler-side.jpg",
            "https://i.ibb.co/hV72r1J/wrangler-interior1.jpg",
            "https://i.ibb.co/L2V9r2m/wrangler-interior2.jpg"
        ],
        description: "The Jeep Wrangler is an iconic off-road vehicle with a distinct design and legendary capabilities. It offers a unique combination of open-air freedom and serious all-terrain performance."
    },
    grand_cherokee: {
        name: "Jeep Grand Cherokee",
        price: "₹67.50 - 69.04 Lakh*",
        image: "https://i.ibb.co/f4n1k5w/grand-cherokee-main.jpg",
        specs: {
            Engine: "1995 cc",
            Power: "268.27 bhp",
            Torque: "400 Nm",
            Seating: "5",
            Mileage: "7.2 kmpl",
            Drive: "4WD"
        },
        variants: [
            { name: "Grand Cherokee Limited Opt", price: "₹67.50 Lakh*" },
            { name: "Grand Cherokee Signature Edition", price: "₹69.04 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/f4n1k5w/grand-cherokee-main.jpg",
            "https://i.ibb.co/M9F5k9d/grand-cherokee-back.jpg",
            "https://i.ibb.co/9V4d8Tz/grand-cherokee-side.jpg",
            "https://i.ibb.co/k2c5g9n/grand-cherokee-interior1.jpg",
            "https://i.ibb.co/L6v3m4w/grand-cherokee-interior2.jpg"
        ],
        description: "The Jeep Grand Cherokee is a premium 5-seater SUV that blends luxury with off-road prowess. It offers a plush and feature-loaded cabin, strong performance, and a commanding road presence."
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