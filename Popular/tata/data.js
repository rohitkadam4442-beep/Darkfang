// Data store remains the same, simulating a database structure
const carsData = {
    punch: {
        name: "Tata Punch",
        price: "₹6.13 - 10.20 Lakh*",
        image: "/image/TATA/t1.jpg",
        specs: {
            Engine: "1199 cc",
            Power: "86 bhp",
            Torque: "115 Nm",
            Seating: "5",
            Mileage: "18.97 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Punch Pure", price: "₹6.13 Lakh*" },
            { name: "Punch Adventure", price: "₹6.90 Lakh*" },
            { name: "Punch Accomplished", price: "₹7.85 Lakh*" },
            { name: "Punch Creative", price: "₹9.20 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6803h72/punch-main.jpg",
            "https://i.ibb.co/R2tW2w8/punch-back.jpg",
            "https://i.ibb.co/2dy7B6T/punch-side.jpg",
            "https://i.ibb.co/61B1Lgh/punch-interior1.jpg",
            "https://i.ibb.co/6N6d2kR/punch-interior2.jpg"
        ],
        description: "The Tata Punch is a micro-SUV known for its robust build, high safety ratings, and commanding road presence, making it a great option for both city and highway drives."
    },
    nexon: {
        name: "Tata Nexon",
        price: "₹8.15 - 15.60 Lakh*",
        image: "/image/TATA/t2.jpg",
        specs: {
            Engine: "1199 cc",
            Power: "118.35 bhp",
            Torque: "170 Nm",
            Seating: "5",
            Mileage: "17.01 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Nexon Smart", price: "₹8.15 Lakh*" },
            { name: "Nexon Creative", price: "₹10.90 Lakh*" },
            { name: "Nexon Fearless", price: "₹12.60 Lakh*" },
            { name: "Nexon Empowered", price: "₹14.00 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/pLg0J0h/nexon-main.jpg",
            "https://i.ibb.co/n7W3yWd/nexon-back.jpg",
            "https://i.ibb.co/m0fJ5cM/nexon-side.jpg",
            "https://i.ibb.co/d7Xh1fD/nexon-interior1.jpg",
            "https://i.ibb.co/sKq7qJ4/nexon-interior2.jpg"
        ],
        description: "The Tata Nexon is a stylish compact SUV that boasts of an impressive design, feature-rich interior, and a wide range of engine and transmission options."
    },
    harrier: {
        name: "Tata Harrier",
        price: "₹15.49 - 26.44 Lakh*",
        image: "/image/TATA/t3.jpg",
        specs: {
            Engine: "1956 cc",
            Power: "167.67 bhp",
            Torque: "350 Nm",
            Seating: "5",
            Mileage: "16.8 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Harrier Smart", price: "₹15.49 Lakh*" },
            { name: "Harrier Pure", price: "₹16.99 Lakh*" },
            { name: "Harrier Creative", price: "₹19.99 Lakh*" },
            { name: "Harrier Fearless", price: "₹22.49 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/F82f0w5/harrier-main.jpg",
            "https://i.ibb.co/4P2Q6gP/harrier-back.jpg",
            "https://i.ibb.co/Rps8R2z/harrier-side.jpg",
            "https://i.ibb.co/k2D7Y8G/harrier-interior1.jpg",
            "https://i.ibb.co/8b7J2pM/harrier-interior2.jpg"
        ],
        description: "The Tata Harrier is a mid-size SUV with a striking design, a powerful diesel engine, and a spacious, comfortable cabin, offering a premium experience."
    },
    safari: {
        name: "Tata Safari",
        price: "₹16.19 - 27.34 Lakh*",
        image: "/image/TATA/t4.jpg",
        specs: {
            Engine: "1956 cc",
            Power: "167.67 bhp",
            Torque: "350 Nm",
            Seating: "6/7",
            Mileage: "16.3 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Safari Smart", price: "₹16.19 Lakh*" },
            { name: "Safari Pure", price: "₹17.69 Lakh*" },
            { name: "Safari Adventure", price: "₹20.99 Lakh*" },
            { name: "Safari Accomplished", price: "₹23.49 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/f4v9k1z/safari-main.jpg",
            "https://i.ibb.co/R07XfVq/safari-back.jpg",
            "https://i.ibb.co/3sS7L7W/safari-side.jpg",
            "https://i.ibb.co/k2y295g/safari-interior1.jpg",
            "https://i.ibb.co/3d6H2kG/safari-interior2.jpg"
        ],
        description: "The Tata Safari is a 7-seater SUV known for its powerful performance, luxurious interiors, and strong presence on the road, perfect for family adventures."
    },
    tiago: {
        name: "Tata Tiago",
        price: "₹5.65 - 8.90 Lakh*",
        image: "/image/TATA/t5.jpg",
        specs: {
            Engine: "1199 cc",
            Power: "86 bhp",
            Torque: "113 Nm",
            Seating: "5",
            Mileage: "20.01 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Tiago XE", price: "₹5.65 Lakh*" },
            { name: "Tiago XT", price: "₹6.20 Lakh*" },
            { name: "Tiago XZ+", price: "₹7.50 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/5cQfW6b/tiago-main.jpg",
            "https://i.ibb.co/n1gG95b/tiago-back.jpg",
            "https://i.ibb.co/zXn2w5N/tiago-side.jpg",
            "https://i.ibb.co/T4X1K1R/tiago-interior1.jpg",
            "https://i.ibb.co/xL2y94G/tiago-interior2.jpg"
        ],
        description: "The Tata Tiago is a budget-friendly hatchback that offers a good blend of style, safety, and features, making it a compelling choice for first-time car buyers."
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