// Data store remains the same, simulating a database structure
const carsData = {
    innova: {
        name: "Toyota Innova Crysta",
        price: "₹19.99 - 26.55 Lakh*",
        image: "https://i.ibb.co/6803h72/innova-main.jpg",
        specs: {
            Engine: "2393 cc",
            Power: "147.9 bhp",
            Torque: "343 Nm",
            Seating: "7/8",
            Mileage: "15 kmpl",
            Drive: "RWD"
        },
        variants: [
            { name: "Innova Crysta GX", price: "₹19.99 Lakh*" },
            { name: "Innova Crysta VX", price: "₹23.79 Lakh*" },
            { name: "Innova Crysta ZX", price: "₹26.55 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6803h72/innova-main.jpg",
            "https://i.ibb.co/R2tW2w8/innova-back.jpg",
            "https://i.ibb.co/2dy7B6T/innova-side.jpg",
            "https://i.ibb.co/61B1Lgh/innova-interior1.jpg",
            "https://i.ibb.co/6N6d2kR/innova-interior2.jpg"
        ],
        description: "The Toyota Innova Crysta is a popular MUV renowned for its reliability, spacious interiors, and comfortable ride, making it a top choice for large families and long-distance travel."
    },
    fortuner: {
        name: "Toyota Fortuner",
        price: "₹33.43 - 51.44 Lakh*",
        image: "https://i.ibb.co/pLg0J0h/fortuner-main.jpg",
        specs: {
            Engine: "2755 cc",
            Power: "201 bhp",
            Torque: "500 Nm",
            Seating: "7",
            Mileage: "14.4 kmpl",
            Drive: "RWD / 4WD"
        },
        variants: [
            { name: "Fortuner 4X2 MT", price: "₹33.43 Lakh*" },
            { name: "Fortuner 4X4 MT", price: "₹39.03 Lakh*" },
            { name: "Fortuner GR-S", price: "₹51.44 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/pLg0J0h/fortuner-main.jpg",
            "https://i.ibb.co/n7W3yWd/fortuner-back.jpg",
            "https://i.ibb.co/m0fJ5cM/fortuner-side.jpg",
            "https://i.ibb.co/d7Xh1fD/fortuner-interior1.jpg",
            "https://i.ibb.co/sKq7qJ4/fortuner-interior2.jpg"
        ],
        description: "The Toyota Fortuner is a powerful and rugged SUV known for its strong off-road capabilities, commanding presence, and luxurious features, making it a segment leader."
    },
    camry: {
        name: "Toyota Camry",
        price: "₹46.17 Lakh*",
        image: "https://i.ibb.co/F82f0w5/camry-main.jpg",
        specs: {
            Engine: "2487 cc",
            Power: "176 bhp",
            Torque: "221 Nm",
            Seating: "5",
            Mileage: "19.1 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Camry Hybrid", price: "₹46.17 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/F82f0w5/camry-main.jpg",
            "https://i.ibb.co/4P2Q6gP/camry-back.jpg",
            "https://i.ibb.co/Rps8R2z/camry-side.jpg",
            "https://i.ibb.co/k2D7Y8G/camry-interior1.jpg",
            "https://i.ibb.co/8b7J2pM/camry-interior2.jpg"
        ],
        description: "The Toyota Camry is a luxury sedan known for its hybrid efficiency, elegant design, and smooth ride, offering a blend of performance and eco-friendliness."
    },
    glanza: {
        name: "Toyota Glanza",
        price: "₹6.86 - 10.00 Lakh*",
        image: "https://i.ibb.co/f4v9k1z/glanza-main.jpg",
        specs: {
            Engine: "1197 cc",
            Power: "88.5 bhp",
            Torque: "113 Nm",
            Seating: "5",
            Mileage: "22.94 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Glanza E", price: "₹6.86 Lakh*" },
            { name: "Glanza S", price: "₹7.60 Lakh*" },
            { name: "Glanza V", price: "₹10.00 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/f4v9k1z/glanza-main.jpg",
            "https://i.ibb.co/R07XfVq/glanza-back.jpg",
            "https://i.ibb.co/3sS7L7W/glanza-side.jpg",
            "https://i.ibb.co/k2y295g/glanza-interior1.jpg",
            "https://i.ibb.co/3d6H2kG/glanza-interior2.jpg"
        ],
        description: "The Toyota Glanza is a stylish hatchback that combines modern design with Toyota's reliability, offering a comfortable ride and excellent fuel efficiency."
    },
    urbanCruiserHyryder: {
        name: "Toyota Urban Cruiser Hyryder",
        price: "₹11.14 - 20.19 Lakh*",
        image: "https://i.ibb.co/5cQfW6b/hyryder-main.jpg",
        specs: {
            Engine: "1462 cc",
            Power: "101.6 bhp",
            Torque: "136.8 Nm",
            Seating: "5",
            Mileage: "27.97 kmpl",
            Drive: "FWD / AWD"
        },
        variants: [
            { name: "Hyryder E", price: "₹11.14 Lakh*" },
            { name: "Hyryder G", price: "₹14.93 Lakh*" },
            { name: "Hyryder V", price: "₹20.19 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/5cQfW6b/hyryder-main.jpg",
            "https://i.ibb.co/n1gG95b/hyryder-back.jpg",
            "https://i.ibb.co/zXn2w5N/hyryder-side.jpg",
            "https://i.ibb.co/T4X1K1R/hyryder-interior1.jpg",
            "https://i.ibb.co/xL2y94G/hyryder-interior2.jpg"
        ],
        description: "The Toyota Urban Cruiser Hyryder is a hybrid SUV that offers a blend of stylish design, fuel-efficient performance, and advanced technology for urban and highway use."
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