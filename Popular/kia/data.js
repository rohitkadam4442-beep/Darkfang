// Data store remains the same, simulating a database structure
const carsData = {
    sonet: {
        name: "Kia Sonet",
        price: "₹7.99 - 15.75 Lakh*",
        image: "https://i.ibb.co/6803h72/sonet-main.jpg",
        specs: {
            Engine: "1493 cc",
            Power: "114 bhp",
            Torque: "250 Nm",
            Seating: "5",
            Mileage: "19 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Sonet HTE", price: "₹7.99 Lakh*" },
            { name: "Sonet HTX", price: "₹11.99 Lakh*" },
            { name: "Sonet GTX+", price: "₹15.75 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6803h72/sonet-main.jpg",
            "https://i.ibb.co/R2tW2w8/sonet-back.jpg",
            "https://i.ibb.co/2dy7B6T/sonet-side.jpg",
            "https://i.ibb.co/61B1Lgh/sonet-interior1.jpg",
            "https://i.ibb.co/6N6d2kR/sonet-interior2.jpg"
        ],
        description: "The Kia Sonet is a compact SUV with a bold and sporty design, offering a range of advanced features, comfortable interiors, and multiple powertrain options."
    },
    seltos: {
        name: "Kia Seltos",
        price: "₹10.90 - 20.30 Lakh*",
        image: "https://i.ibb.co/pLg0J0h/seltos-main.jpg",
        specs: {
            Engine: "1497 cc",
            Power: "113.42 bhp",
            Torque: "144 Nm",
            Seating: "5",
            Mileage: "17 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Seltos HTE", price: "₹10.90 Lakh*" },
            { name: "Seltos HTK+", price: "₹13.99 Lakh*" },
            { name: "Seltos GTX+", price: "₹17.99 Lakh*" },
            { name: "Seltos X-Line", price: "₹20.30 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/pLg0J0h/seltos-main.jpg",
            "https://i.ibb.co/n7W3yWd/seltos-back.jpg",
            "https://i.ibb.co/m0fJ5cM/seltos-side.jpg",
            "https://i.ibb.co/d7Xh1fD/seltos-interior1.jpg",
            "https://i.ibb.co/sKq7qJ4/seltos-interior2.jpg"
        ],
        description: "The Kia Seltos is a stylish and feature-packed SUV that offers a perfect blend of performance, technology, and comfort, making it a strong competitor in its segment."
    },
    carens: {
        name: "Kia Carens",
        price: "₹10.45 - 19.49 Lakh*",
        image: "https://i.ibb.co/F82f0w5/carens-main.jpg",
        specs: {
            Engine: "1497 cc",
            Power: "113.42 bhp",
            Torque: "144 Nm",
            Seating: "6/7",
            Mileage: "16.5 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Carens Premium", price: "₹10.45 Lakh*" },
            { name: "Carens Prestige", price: "₹11.99 Lakh*" },
            { name: "Carens Luxury+", price: "₹19.49 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/F82f0w5/carens-main.jpg",
            "https://i.ibb.co/4P2Q6gP/carens-back.jpg",
            "https://i.ibb.co/Rps8R2z/carens-side.jpg",
            "https://i.ibb.co/k2D7Y8G/carens-interior1.jpg",
            "https://i.ibb.co/8b7J2pM/carens-interior2.jpg"
        ],
        description: "The Kia Carens is a stylish and versatile MUV that offers a comfortable ride, spacious cabin, and a host of safety and convenience features for the entire family."
    },
    ev6: {
        name: "Kia EV6",
        price: "₹60.95 - 65.95 Lakh*",
        image: "https://i.ibb.co/f4v9k1z/ev6-main.jpg",
        specs: {
            Engine: "Electric",
            Power: "321 bhp",
            Torque: "605 Nm",
            Seating: "5",
            Range: "528 km/charge",
            Drive: "RWD / AWD"
        },
        variants: [
            { name: "EV6 GT Line RWD", price: "₹60.95 Lakh*" },
            { name: "EV6 GT Line AWD", price: "₹65.95 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/f4v9k1z/ev6-main.jpg",
            "https://i.ibb.co/R07XfVq/ev6-back.jpg",
            "https://i.ibb.co/3sS7L7W/ev6-side.jpg",
            "https://i.ibb.co/k2y295g/ev6-interior1.jpg",
            "https://i.ibb.co/3d6H2kG/ev6-interior2.jpg"
        ],
        description: "The Kia EV6 is a futuristic electric crossover that combines a striking design with exhilarating performance, a long-range battery, and ultra-fast charging capabilities."
    },
    carnival: {
        name: "Kia Carnival",
        price: "₹30.99 - 35.49 Lakh*",
        image: "https://i.ibb.co/5cQfW6b/carnival-main.jpg",
        specs: {
            Engine: "2199 cc",
            Power: "197 bhp",
            Torque: "440 Nm",
            Seating: "7",
            Mileage: "13.9 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Carnival Premium", price: "₹30.99 Lakh*" },
            { name: "Carnival Prestige", price: "₹34.99 Lakh*" },
            { name: "Carnival Limousine", price: "₹35.49 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/5cQfW6b/carnival-main.jpg",
            "https://i.ibb.co/n1gG95b/carnival-back.jpg",
            "https://i.ibb.co/zXn2w5N/carnival-side.jpg",
            "https://i.ibb.co/T4X1K1R/carnival-interior1.jpg",
            "https://i.ibb.co/xL2y94G/carnival-interior2.jpg"
        ],
        description: "The Kia Carnival is a premium MUV that redefines luxury with its lounge-like interiors, powerful engine, and a host of advanced features, providing a first-class travel experience."
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