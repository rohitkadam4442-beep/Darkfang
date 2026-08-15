// Data store remains the same, simulating a database structure
const carsData = {
    elevate: {
        name: "Honda Elevate",
        price: "₹11.91 - 16.83 Lakh*",
        image: "https://i.ibb.co/6803h72/elevate-main.jpg",
        specs: {
            Engine: "1498 cc",
            Power: "119 bhp",
            Torque: "145 Nm",
            Seating: "5",
            Mileage: "15.31 - 16.92 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Elevate SV", price: "₹11.91 Lakh*" },
            { name: "Elevate V", price: "₹12.39 Lakh*" },
            { name: "Elevate ZX CVT", price: "₹16.63 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6803h72/elevate-main.jpg",
            "https://i.ibb.co/R2tW2w8/elevate-back.jpg",
            "https://i.ibb.co/2dy7B6T/elevate-side.jpg",
            "https://i.ibb.co/61B1Lgh/elevate-interior1.jpg",
            "https://i.ibb.co/6N6d2kR/elevate-interior2.jpg"
        ],
        description: "The Honda Elevate is a new compact SUV with a bold design, spacious interior, and a refined petrol engine, making it a strong contender in the segment. It offers a balance of comfort, features, and Honda's reliability."
    },
    city: {
        name: "Honda City",
        price: "₹12.38 - 16.65 Lakh*",
        image: "https://i.ibb.co/pLg0J0h/city-main.jpg",
        specs: {
            Engine: "1498 cc",
            Power: "119.35 bhp",
            Torque: "145 Nm",
            Seating: "5",
            Mileage: "17.8 - 18.4 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "City SV", price: "₹12.38 Lakh*" },
            { name: "City VX", price: "₹14.99 Lakh*" },
            { name: "City ZX CVT", price: "₹16.65 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/pLg0J0h/city-main.jpg",
            "https://i.ibb.co/n7W3yWd/city-back.jpg",
            "https://i.ibb.co/m0fJ5cM/city-side.jpg",
            "https://i.ibb.co/d7Xh1fD/city-interior1.jpg",
            "https://i.ibb.co/sKq7qJ4/city-interior2.jpg"
        ],
        description: "The Honda City is a premium sedan renowned for its elegant design, spacious and comfortable cabin, and a fuel-efficient engine. It comes with a host of advanced features, including ADAS on the top-end variant."
    },
    amaze: {
        name: "Honda Amaze",
        price: "₹7.63 - 11.20 Lakh*",
        image: "https://i.ibb.co/F82f0w5/amaze-main.jpg",
        specs: {
            Engine: "1199 cc",
            Power: "88.5 bhp",
            Torque: "110 Nm",
            Seating: "5",
            Mileage: "18.3 - 19.46 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Amaze 2nd Gen S", price: "₹7.63 Lakh*" },
            { name: "Amaze VX", price: "₹9.24 Lakh*" },
            { name: "Amaze ZX CVT", price: "₹11.20 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/F82f0w5/amaze-main.jpg",
            "https://i.ibb.co/4P2Q6gP/amaze-back.jpg",
            "https://i.ibb.co/Rps8R2z/amaze-side.jpg",
            "https://i.ibb.co/k2D7Y8d/amaze-interior1.jpg",
            "https://i.ibb.co/S7q0Sj8/amaze-interior2.jpg"
        ],
        description: "The Honda Amaze is a stylish and reliable compact sedan, known for its spacious cabin, fuel efficiency, and smooth performance. It is a popular choice for city and highway commuting."
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