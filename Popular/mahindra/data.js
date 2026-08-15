// Data store remains the same, simulating a database structure
const carsData = {
    scorpio_n: {
        name: "Mahindra Scorpio-N",
        price: "₹13.99 - 25.15 Lakh*",
        image: "https://i.ibb.co/6803h72/scorpio-n-main.jpg",
        specs: {
            Engine: "2198 cc (Diesel) / 1997 cc (Petrol)",
            Power: "172.45 bhp (Diesel) / 200 bhp (Petrol)",
            Torque: "400 Nm (Diesel) / 370 Nm (Petrol)",
            Seating: "6/7",
            Mileage: "12.12 - 15.94 kmpl",
            Drive: "RWD / 4WD"
        },
        variants: [
            { name: "Scorpio-N Z2", price: "₹13.99 Lakh*" },
            { name: "Scorpio-N Z8 Select", price: "₹17.58 Lakh*" },
            { name: "Scorpio-N Z8 L", price: "₹21.35 Lakh*" },
            { name: "Scorpio-N Z8 L AT 4WD", price: "₹25.15 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6803h72/scorpio-n-main.jpg",
            "https://i.ibb.co/R2tW2w8/scorpio-n-back.jpg",
            "https://i.ibb.co/2dy7B6T/scorpio-n-side.jpg",
            "https://i.ibb.co/61B1Lgh/scorpio-n-interior1.jpg",
            "https://i.ibb.co/6N6d2kR/scorpio-n-interior2.jpg"
        ],
        description: "The Mahindra Scorpio-N is a modern and powerful SUV that combines a commanding road presence with a comfortable and feature-rich interior, and is available with both petrol and diesel engines."
    },
    xuv700: {
        name: "Mahindra XUV700",
        price: "₹14.49 - 25.14 Lakh*",
        image: "https://i.ibb.co/pLg0J0h/xuv700-main.jpg",
        specs: {
            Engine: "2198 cc (Diesel) / 1999 cc (Petrol)",
            Power: "182 bhp (Diesel) / 197 bhp (Petrol)",
            Torque: "450 Nm (Diesel) / 380 Nm (Petrol)",
            Seating: "5/7",
            Mileage: "13 - 17 kmpl",
            Drive: "FWD / AWD"
        },
        variants: [
            { name: "XUV700 MX", price: "₹14.49 Lakh*" },
            { name: "XUV700 AX5", price: "₹18.34 Lakh*" },
            { name: "XUV700 AX7", price: "₹19.49 Lakh*" },
            { name: "XUV700 AX7 L AT", price: "₹25.14 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/pLg0J0h/xuv700-main.jpg",
            "https://i.ibb.co/n7W3yWd/xuv700-back.jpg",
            "https://i.ibb.co/m0fJ5cM/xuv700-side.jpg",
            "https://i.ibb.co/d7Xh1fD/xuv700-interior1.jpg",
            "https://i.ibb.co/sKq7qJ4/xuv700-interior2.jpg"
        ],
        description: "The Mahindra XUV700 is a flagship SUV known for its futuristic design, powerful performance, and advanced technology features, including a dual-screen setup and ADAS."
    },
    thar: {
        name: "Mahindra Thar",
        price: "₹11.50 - 17.62 Lakh*",
        image: "https://i.ibb.co/F82f0w5/thar-main.jpg",
        specs: {
            Engine: "1497 cc (Diesel) / 2184 cc (Diesel) / 1997 cc (Petrol)",
            Power: "117 bhp - 150 bhp",
            Torque: "300 Nm - 320 Nm",
            Seating: "4",
            Mileage: "14 - 17 kmpl",
            Drive: "RWD / 4WD"
        },
        variants: [
            { name: "Thar AX (O) Diesel RWD", price: "₹11.50 Lakh*" },
            { name: "Thar LX Diesel RWD", price: "₹13.16 Lakh*" },
            { name: "Thar LX Petrol 4WD AT", price: "₹16.80 Lakh*" },
            { name: "Thar LX Diesel 4WD AT", price: "₹17.62 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/F82f0w5/thar-main.jpg",
            "https://i.ibb.co/4P2Q6gP/thar-back.jpg",
            "https://i.ibb.co/Rps8R2z/thar-side.jpg",
            "https://i.ibb.co/k2D7Y8G/thar-interior1.jpg",
            "https://i.ibb.co/8b7J2pM/thar-interior2.jpg"
        ],
        description: "The Mahindra Thar is an iconic off-road SUV that offers a rugged and adventurous design, along with strong performance and 4x4 capabilities for an exhilarating driving experience."
    },
    bolero_neo: {
        name: "Mahindra Bolero Neo",
        price: "₹9.97 - 12.18 Lakh*",
        image: "https://i.ibb.co/f4v9k1z/bolero-neo-main.jpg",
        specs: {
            Engine: "1493 cc",
            Power: "98.56 bhp",
            Torque: "260 Nm",
            Seating: "7",
            Mileage: "17.29 kmpl",
            Drive: "RWD"
        },
        variants: [
            { name: "Bolero Neo N4", price: "₹9.97 Lakh*" },
            { name: "Bolero Neo N8", price: "₹10.66 Lakh*" },
            { name: "Bolero Neo N10 R", price: "₹11.49 Lakh*" },
            { name: "Bolero Neo N10 Option", price: "₹12.18 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/f4v9k1z/bolero-neo-main.jpg",
            "https://i.ibb.co/R07XfVq/bolero-neo-back.jpg",
            "https://i.ibb.co/3sS7L7W/bolero-neo-side.jpg",
            "https://i.ibb.co/k2y295g/bolero-neo-interior1.jpg",
            "https://i.ibb.co/3d6H2kG/bolero-neo-interior2.jpg"
        ],
        description: "The Mahindra Bolero Neo is a rugged and reliable sub-4 meter SUV that offers a spacious cabin, comfortable ride, and a tough build, making it a great choice for both city and rural use."
    },
    xuv3xo: {
        name: "Mahindra XUV 3XO",
        price: "₹7.99 - 15.80 Lakh*",
        image: "https://i.ibb.co/5cQfW6b/xuv3xo-main.jpg",
        specs: {
            Engine: "1197 cc (Petrol) / 1497 cc (Diesel)",
            Power: "109 bhp (Petrol) / 115 bhp (Diesel)",
            Torque: "200 Nm (Petrol) / 300 Nm (Diesel)",
            Seating: "5",
            Mileage: "18.06 - 20.1 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "XUV 3XO MX1", price: "₹7.99 Lakh*" },
            { name: "XUV 3XO AX5", price: "₹10.99 Lakh*" },
            { name: "XUV 3XO AX7", price: "₹14.49 Lakh*" },
            { name: "XUV 3XO AX7 L AT", price: "₹15.80 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/5cQfW6b/xuv3xo-main.jpg",
            "https://i.ibb.co/n1gG95b/xuv3xo-back.jpg",
            "https://i.ibb.co/zXn2w5N/xuv3xo-side.jpg",
            "https://i.ibb.co/T4X1K1R/xuv3xo-interior1.jpg",
            "https://i.ibb.co/xL2y94G/xuv3xo-interior2.jpg"
        ],
        description: "The Mahindra XUV 3XO is a stylish and feature-loaded compact SUV that offers a compelling package with its modern design, multiple powertrain options, and a long list of safety and convenience features."
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