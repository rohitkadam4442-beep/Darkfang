// Data store remains the same, simulating a database structure
const carsData = {
    hector: {
        name: "MG Hector",
        price: "₹14.99 - 22.99 Lakh*",
        image: "/image/MG/m1.jpg",
        specs: {
            Engine: "1451 cc (Petrol) / 1956 cc (Diesel)",
            Power: "141 bhp (Petrol) / 168 bhp (Diesel)",
            Torque: "250 Nm (Petrol) / 350 Nm (Diesel)",
            Seating: "5",
            Mileage: "13.79 - 15.58 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Hector Style MT", price: "₹14.99 Lakh*" },
            { name: "Hector Smart Pro MT", price: "₹18.69 Lakh*" },
            { name: "Hector Sharp Pro MT", price: "₹20.99 Lakh*" },
            { name: "Hector Sharp Pro CVT", price: "₹22.99 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6803h72/hector-main.jpg",
            "https://i.ibb.co/R2tW2w8/hector-back.jpg",
            "https://i.ibb.co/2dy7B6T/hector-side.jpg",
            "https://i.ibb.co/61B1Lgh/hector-interior1.jpg",
            "https://i.ibb.co/6N6d2kR/hector-interior2.jpg"
        ],
        description: "The MG Hector is a 'connected car' with a large touchscreen infotainment system, spacious cabin, and a bold design. It's known for its feature-rich package and a comfortable ride."
    },
    astor: {
        name: "MG Astor",
        price: "₹9.98 - 18.06 Lakh*",
        image: "/image/MG/m2.jpg",
        specs: {
            Engine: "1498 cc (Petrol) / 1349 cc (Petrol Turbo)",
            Power: "108.49 bhp (Petrol) / 138 bhp (Petrol Turbo)",
            Torque: "144 Nm (Petrol) / 220 Nm (Petrol Turbo)",
            Seating: "5",
            Mileage: "14 - 15.43 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Astor Style", price: "₹9.98 Lakh*" },
            { name: "Astor Super", price: "₹11.60 Lakh*" },
            { name: "Astor Sharp", price: "₹15.80 Lakh*" },
            { name: "Astor Savvy", price: "₹18.06 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/pLg0J0h/astor-main.jpg",
            "https://i.ibb.co/n7W3yWd/astor-back.jpg",
            "https://i.ibb.co/m0fJ5cM/astor-side.jpg",
            "https://i.ibb.co/d7Xh1fD/astor-interior1.jpg",
            "https://i.ibb.co/sKq7qJ4/astor-interior2.jpg"
        ],
        description: "The MG Astor is a compact SUV with AI-powered personal assistant, Level 2 ADAS features, and a premium cabin. It stands out with its smart technology and stylish design."
    },
    zsev: {
        name: "MG ZS EV",
        price: "₹18.98 - 25.20 Lakh*",
        image: "/image/MG/m3.jpg",
        specs: {
            Engine: "Electric",
            Power: "174.33 bhp",
            Torque: "280 Nm",
            Seating: "5",
            Range: "461 km/charge",
            Drive: "FWD"
        },
        variants: [
            { name: "ZS EV Excite", price: "₹18.98 Lakh*" },
            { name: "ZS EV Exclusive", price: "₹23.98 Lakh*" },
            { name: "ZS EV Essence", price: "₹25.20 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/F82f0w5/zsev-main.jpg",
            "https://i.ibb.co/4P2Q6gP/zsev-back.jpg",
            "https://i.ibb.co/Rps8R2z/zsev-side.jpg",
            "https.ibb.co/k2D7Y8G/zsev-interior1.jpg",
            "https://i.ibb.co/8b7J2pM/zsev-interior2.jpg"
        ],
        description: "The MG ZS EV is a fully electric SUV that offers a long range, a powerful electric motor, and a host of modern features. It's a key player in the growing electric vehicle segment."
    },
    gloster: {
        name: "MG Gloster",
        price: "₹38.80 - 43.87 Lakh*",
        image: "/image/MG/m4.jpg",
        specs: {
            Engine: "1996 cc",
            Power: "158.8 bhp (2WD) / 212.5 bhp (4WD)",
            Torque: "373.5 Nm (2WD) / 480 Nm (4WD)",
            Seating: "6/7",
            Mileage: "13.9 - 14.2 kmpl",
            Drive: "2WD / 4WD"
        },
        variants: [
            { name: "Gloster Sharp", price: "₹38.80 Lakh*" },
            { name: "Gloster Savvy", price: "₹42.20 Lakh*" },
            { name: "Gloster Blackstorm", price: "₹43.87 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/f4v9k1z/gloster-main.jpg",
            "https://i.ibb.co/R07XfVq/gloster-back.jpg",
            "https://i.ibb.co/3sS7L7W/gloster-side.jpg",
            "https://i.ibb.co/k2y295g/gloster-interior1.jpg",
            "https://i.ibb.co/3d6H2kG/gloster-interior2.jpg"
        ],
        description: "The MG Gloster is a full-size SUV that combines a muscular design with a luxurious and spacious cabin. It is equipped with advanced safety features and a powerful engine, offering a premium experience."
    },
    comet: {
        name: "MG Comet EV",
        price: "₹6.99 - 9.53 Lakh*",
        image: "/image/MG/m5.jpg",
        specs: {
            Engine: "Electric",
            Power: "41.4 bhp",
            Torque: "110 Nm",
            Seating: "4",
            Range: "230 km/charge",
            Drive: "FWD"
        },
        variants: [
            { name: "Comet EV Pace", price: "₹6.99 Lakh*" },
            { name: "Comet EV Play", price: "₹8.98 Lakh*" },
            { name: "Comet EV Plush", price: "₹9.53 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/5cQfW6b/comet-main.jpg",
            "https://i.ibb.co/n1gG95b/comet-back.jpg",
            "https://i.ibb.co/zXn2w5N/comet-side.jpg",
            "https://i.ibb.co/T4X1K1R/comet-interior1.jpg",
            "https://i.ibb.co/xL2y94G/comet-interior2.jpg"
        ],
        description: "The MG Comet EV is a compact and urban-friendly electric car designed for city commuting. Its small size, easy maneuverability, and electric powertrain make it a practical and eco-friendly choice for daily use."
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