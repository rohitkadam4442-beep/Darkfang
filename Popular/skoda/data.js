// Data store remains the same, simulating a database structure
const carsData = {
    kushaq: {
        name: "Skoda Kushaq",
        price: "₹10.99 - 19.09 Lakh*",
        image: "https://i.ibb.co/6803h72/kushaq-main.jpg",
        specs: {
            Engine: "999 cc / 1498 cc",
            Power: "114 - 147.51 bhp",
            Torque: "178 - 250 Nm",
            Seating: "5",
            Mileage: "18.09 - 19.76 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Kushaq Classic", price: "₹10.99 Lakh*" },
            { name: "Kushaq Onyx", price: "₹13.59 Lakh*" },
            { name: "Kushaq Signature", price: "₹14.89 Lakh*" },
            { name: "Kushaq Monte Carlo", price: "₹17.49 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6803h72/kushaq-main.jpg",
            "https://i.ibb.co/R2tW2w8/kushaq-back.jpg",
            "https://i.ibb.co/2dy7B6T/kushaq-side.jpg",
            "https://i.ibb.co/61B1Lgh/kushaq-interior1.jpg",
            "https://i.ibb.co/6N6d2kR/kushaq-interior2.jpg"
        ],
        description: "The Skoda Kushaq is a stylish and premium compact SUV known for its solid build quality, punchy turbo-petrol engines, and excellent driving dynamics. It has a 5-star safety rating from Global NCAP."
    },
    slavia: {
        name: "Skoda Slavia",
        price: "₹10.49 - 18.33 Lakh*",
        image: "https://i.ibb.co/pLg0J0h/slavia-main.jpg",
        specs: {
            Engine: "999 cc / 1498 cc",
            Power: "114 - 147.51 bhp",
            Torque: "178 - 250 Nm",
            Seating: "5",
            Mileage: "18.73 - 20.32 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Slavia Classic", price: "₹10.49 Lakh*" },
            { name: "Slavia Signature", price: "₹13.59 Lakh*" },
            { name: "Slavia Sportline", price: "₹13.80 Lakh*" },
            { name: "Slavia Monte Carlo", price: "₹15.63 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/pLg0J0h/slavia-main.jpg",
            "https://i.ibb.co/n7W3yWd/slavia-back.jpg",
            "https://i.ibb.co/m0fJ5cM/slavia-side.jpg",
            "https://i.ibb.co/d7Xh1fD/slavia-interior1.jpg",
            "https://i.ibb.co/sKq7qJ4/slavia-interior2.jpg"
        ],
        description: "The Skoda Slavia is a mid-size sedan that combines elegant design with powerful performance. It offers a spacious and feature-rich cabin, and like the Kushaq, it boasts a 5-star Global NCAP safety rating."
    },
    kodiaq: {
        name: "Skoda Kodiaq",
        price: "₹46.89 - 49.24 Lakh*",
        image: "https://i.ibb.co/F82f0w5/kodiaq-main.jpg",
        specs: {
            Engine: "1984 cc",
            Power: "201 bhp",
            Torque: "320 Nm",
            Seating: "7",
            Mileage: "14.86 kmpl",
            Drive: "4WD"
        },
        variants: [
            { name: "Kodiaq Style", price: "₹46.89 Lakh*" },
            { name: "Kodiaq Sportline", price: "₹48.20 Lakh*" },
            { name: "Kodiaq L&K", price: "₹49.24 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/F82f0w5/kodiaq-main.jpg",
            "https://i.ibb.co/4P2Q6gP/kodiaq-back.jpg",
            "https://i.ibb.co/Rps8R2z/kodiaq-side.jpg",
            "https://i.ibb.co/k2D7Y8G/kodiaq-interior1.jpg",
            "https://i.ibb.co/8b7J2pM/kodiaq-interior2.jpg"
        ],
        description: "The Skoda Kodiaq is a premium 7-seater SUV with a powerful engine, sophisticated design, and a long list of luxury and safety features. It offers a comfortable and commanding road presence."
    },
    superb: {
        name: "Skoda Superb (Upcoming)",
        price: "₹50 Lakh* (Expected)",
        image: "https://i.ibb.co/f4v9k1z/superb-main.jpg",
        specs: {
            Engine: "1984 cc (Expected)",
            Power: "187.74 bhp (Expected)",
            Torque: "320 Nm (Expected)",
            Seating: "5",
            Mileage: "15 kmpl (Expected)",
            Drive: "FWD"
        },
        variants: [
            { name: "Upcoming Model", price: "₹50 Lakh* (Expected)" }
        ],
        thumbnails: [
            "https://i.ibb.co/f4v9k1z/superb-main.jpg",
            "https://i.ibb.co/R07XfVq/superb-back.jpg",
            "https://i.ibb.co/3sS7L7W/superb-side.jpg",
            "https://i.ibb.co/k2y295g/superb-interior1.jpg",
            "https://i.ibb.co/3d6H2kG/superb-interior2.jpg"
        ],
        description: "The Skoda Superb is a flagship sedan known for its spacious and luxurious cabin, powerful performance, and a host of advanced features. The new generation is expected to arrive in late 2025 with a refreshed design and updated technology."
    },
    octavia: {
        name: "Skoda Octavia (Upcoming)",
        price: "₹35 Lakh* (Expected)",
        image: "https://i.ibb.co/5cQfW6b/octavia-main.jpg",
        specs: {
            Engine: "1984 cc (Expected)",
            Power: "187.74 bhp (Expected)",
            Torque: "320 Nm (Expected)",
            Seating: "5",
            Mileage: "15.81 kmpl (Expected)",
            Drive: "FWD"
        },
        variants: [
            { name: "Upcoming Model", price: "₹35 Lakh* (Expected)" }
        ],
        thumbnails: [
            "https://i.ibb.co/5cQfW6b/octavia-main.jpg",
            "https://i.ibb.co/n1gG95b/octavia-back.jpg",
            "https://i.ibb.co/zXn2w5N/octavia-side.jpg",
            "https://i.ibb.co/T4X1K1R/octavia-interior1.jpg",
            "https://i.ibb.co/xL2y94G/octavia-interior2.jpg"
        ],
        description: "The Skoda Octavia is a popular executive sedan known for its performance and premium features. A facelift is expected to launch in late 2025, with an updated design and new technology."
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