// Data store remains the same, simulating a database structure
const carsData = {
    creta: {
        name: "Hyundai Creta",
        price: "₹11.00 - 20.15 Lakh*",
        image: "https://i.ibb.co/6803h72/creta-main.jpg",
        specs: {
            Engine: "1497 cc",
            Power: "113.45 bhp",
            Torque: "144 Nm",
            Seating: "5",
            Mileage: "17 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Creta E", price: "₹11.00 Lakh*" },
            { name: "Creta S", price: "₹12.75 Lakh*" },
            { name: "Creta SX (O)", price: "₹17.50 Lakh*" },
            { name: "Creta N Line", price: "₹20.15 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6803h72/creta-main.jpg",
            "https://i.ibb.co/R2tW2w8/creta-back.jpg",
            "https://i.ibb.co/2dy7B6T/creta-side.jpg",
            "https://i.ibb.co/61B1Lgh/creta-interior1.jpg",
            "https://i.ibb.co/6N6d2kR/creta-interior2.jpg"
        ],
        description: "The Hyundai Creta is a popular compact SUV known for its modern design, feature-rich cabin, and a wide range of engine and transmission options, catering to diverse customer needs."
    },
    venue: {
        name: "Hyundai Venue",
        price: "₹7.94 - 13.48 Lakh*",
        image: "https://i.ibb.co/pLg0J0h/venue-main.jpg",
        specs: {
            Engine: "1197 cc",
            Power: "82 bhp",
            Torque: "114 Nm",
            Seating: "5",
            Mileage: "17.5 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Venue E", price: "₹7.94 Lakh*" },
            { name: "Venue S", price: "₹9.11 Lakh*" },
            { name: "Venue SX (O)", price: "₹13.48 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/pLg0J0h/venue-main.jpg",
            "https://i.ibb.co/n7W3yWd/venue-back.jpg",
            "https://i.ibb.co/m0fJ5cM/venue-side.jpg",
            "https://i.ibb.co/d7Xh1fD/venue-interior1.jpg",
            "https://i.ibb.co/sKq7qJ4/venue-interior2.jpg"
        ],
        description: "The Hyundai Venue is a sub-compact SUV that offers a stylish design, connected car technology, and efficient performance, making it a compelling choice for urban commuters."
    },
    i20: {
        name: "Hyundai i20",
        price: "₹7.04 - 11.21 Lakh*",
        image: "https://i.ibb.co/F82f0w5/i20-main.jpg",
        specs: {
            Engine: "1197 cc",
            Power: "86.7 bhp",
            Torque: "114.7 Nm",
            Seating: "5",
            Mileage: "20 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "i20 Era", price: "₹7.04 Lakh*" },
            { name: "i20 Sportz", price: "₹8.33 Lakh*" },
            { name: "i20 Asta (O)", price: "₹11.21 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/F82f0w5/i20-main.jpg",
            "https://i.ibb.co/4P2Q6gP/i20-back.jpg",
            "https://i.ibb.co/Rps8R2z/i20-side.jpg",
            "https://i.ibb.co/k2D7Y8G/i20-interior1.jpg",
            "https://i.ibb.co/8b7J2pM/i20-interior2.jpg"
        ],
        description: "The Hyundai i20 is a premium hatchback known for its fluid design, comfortable ride, and a host of premium features, making it a strong contender in its segment."
    },
    grandi10: {
        name: "Hyundai Grand i10 Nios",
        price: "₹5.92 - 8.56 Lakh*",
        image: "https://i.ibb.co/f4v9k1z/grandi10-main.jpg",
        specs: {
            Engine: "1197 cc",
            Power: "82 bhp",
            Torque: "114 Nm",
            Seating: "5",
            Mileage: "20.7 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Grand i10 Era", price: "₹5.92 Lakh*" },
            { name: "Grand i10 Sportz", price: "₹7.06 Lakh*" },
            { name: "Grand i10 Asta", price: "₹8.56 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/f4v9k1z/grandi10-main.jpg",
            "https://i.ibb.co/R07XfVq/grandi10-back.jpg",
            "https://i.ibb.co/3sS7L7W/grandi10-side.jpg",
            "https://i.ibb.co/k2y295g/grandi10-interior1.jpg",
            "https://i.ibb.co/3d6H2kG/grandi10-interior2.jpg"
        ],
        description: "The Hyundai Grand i10 Nios is a practical and stylish hatchback that offers a smooth and comfortable ride, making it an excellent choice for city commuting and small families."
    },
    verna: {
        name: "Hyundai Verna",
        price: "₹11.00 - 17.42 Lakh*",
        image: "https://i.ibb.co/5cQfW6b/verna-main.jpg",
        specs: {
            Engine: "1497 cc",
            Power: "113.42 bhp",
            Torque: "144 Nm",
            Seating: "5",
            Mileage: "18.6 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Verna EX", price: "₹11.00 Lakh*" },
            { name: "Verna SX", price: "₹12.75 Lakh*" },
            { name: "Verna SX (O)", price: "₹17.42 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/5cQfW6b/verna-main.jpg",
            "https://i.ibb.co/n1gG95b/verna-back.jpg",
            "https://i.ibb.co/zXn2w5N/verna-side.jpg",
            "https://i.ibb.co/T4X1K1R/verna-interior1.jpg",
            "https://i.ibb.co/xL2y94G/verna-interior2.jpg"
        ],
        description: "The Hyundai Verna is a mid-size sedan with a futuristic and sporty design, offering a powerful engine, premium features, and a comfortable ride."
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