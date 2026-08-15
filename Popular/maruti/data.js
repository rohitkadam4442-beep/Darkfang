// Data store remains the same, simulating a database structure
const carsData = {
    swift: {
        name: "Maruti Suzuki Swift",
        price: "₹6.49 - 9.64 Lakh*",
        image: "/image/Maruti/s1.jpg",
        specs: {
            Engine: "1197 cc",
            Power: "88.5 bhp",
            Torque: "113 Nm",
            Seating: "5",
            Mileage: "22.38 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Swift LXi", price: "₹6.49 Lakh*" },
            { name: "Swift VXi", price: "₹7.50 Lakh*" },
            { name: "Swift ZXi+", price: "₹9.64 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/6P26Y6W/swift-main.jpg",
            "https://i.ibb.co/J9k1c9M/swift-back.jpg",
            "https://i.ibb.co/Q8Q8w0Q/swift-side.jpg",
            "https://i.ibb.co/k2c5g4G/swift-interior1.jpg",
            "https://i.ibb.co/mS2dY0p/swift-interior2.jpg"
        ],
        description: "The Maruti Suzuki Swift is a popular hatchback known for its peppy engine, fuel efficiency, and compact design, making it ideal for city driving."
    },
    baleno: {
        name: "Maruti Suzuki Baleno",
        price: "₹6.61 - 9.88 Lakh*",
        image: "/image/Maruti/s2.jpg",
        specs: {
            Engine: "1197 cc",
            Power: "88.5 bhp",
            Torque: "113 Nm",
            Seating: "5",
            Mileage: "22.94 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Baleno Sigma", price: "₹6.61 Lakh*" },
            { name: "Baleno Delta", price: "₹7.45 Lakh*" },
            { name: "Baleno Alpha", price: "₹9.88 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/T4m1s2B/baleno-main.jpg",
            "https://i.ibb.co/hC8W7R0/baleno-back.jpg",
            "https://i.ibb.co/Tqx319p/baleno-side.jpg",
            "https://i.ibb.co/XzY0j0p/baleno-interior1.jpg",
            "https://i.ibb.co/y4p1k0P/baleno-interior2.jpg"
        ],
        description: "The Maruti Suzuki Baleno is a premium hatchback that offers a stylish design, spacious cabin, and a refined engine, providing a comfortable and modern driving experience."
    },
    brezza: {
        name: "Maruti Suzuki Brezza",
        price: "₹8.34 - 14.14 Lakh*",
        image: "/image/Maruti/s3.jpg",
        specs: {
            Engine: "1462 cc",
            Power: "101.6 bhp",
            Torque: "136.8 Nm",
            Seating: "5",
            Mileage: "19.89 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Brezza LXi", price: "₹8.34 Lakh*" },
            { name: "Brezza VXi", price: "₹9.70 Lakh*" },
            { name: "Brezza ZXi+", price: "₹14.14 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/pLg0J0h/range-main.jpg",
            "https://i.ibb.co/n7W3yWd/brezza-back.jpg",
            "https://i.ibb.co/m0fJ5cM/brezza-side.jpg",
            "https://i.ibb.co/d7Xh1fD/brezza-interior1.jpg",
            "https://i.ibb.co/sKq7qJ4/brezza-interior2.jpg"
        ],
        description: "The Maruti Suzuki Brezza is a compact SUV known for its bold design, robust build, and an efficient engine, making it a popular choice for urban adventures."
    },
    ertiga: {
        name: "Maruti Suzuki Ertiga",
        price: "₹8.69 - 13.03 Lakh*",
        image: "/image/Maruti/s4.jpg",
        specs: {
            Engine: "1462 cc",
            Power: "101.6 bhp",
            Torque: "136.8 Nm",
            Seating: "7",
            Mileage: "20.51 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Ertiga LXi", price: "₹8.69 Lakh*" },
            { name: "Ertiga VXi", price: "₹10.43 Lakh*" },
            { name: "Ertiga ZXi+", price: "₹13.03 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/f4v9k1z/curve-main.jpg",
            "https://i.ibb.co/R07XfVq/ertiga-back.jpg",
            "https://i.ibb.co/3sS7L7W/ertiga-side.jpg",
            "https://i.ibb.co/k2y295g/ertiga-interior1.jpg",
            "https://i.ibb.co/3d6H2kG/ertiga-interior2.jpg"
        ],
        description: "The Maruti Suzuki Ertiga is a versatile MUV with a spacious cabin, flexible seating, and excellent fuel efficiency, making it perfect for large families."
    },
    ciaz: {
        name: "Maruti Suzuki Ciaz",
        price: "₹9.40 - 12.29 Lakh*",
        image: "/image/Maruti/s5.jpg",
        specs: {
            Engine: "1462 cc",
            Power: "103.2 bhp",
            Torque: "138 Nm",
            Seating: "5",
            Mileage: "20.65 kmpl",
            Drive: "FWD"
        },
        variants: [
            { name: "Ciaz Sigma", price: "₹9.40 Lakh*" },
            { name: "Ciaz Delta", price: "₹10.00 Lakh*" },
            { name: "Ciaz Alpha", price: "₹12.29 Lakh*" }
        ],
        thumbnails: [
            "https://i.ibb.co/5cQfW6b/mustang-main.jpg",
            "https://i.ibb.co/n1gG95b/ciaz-back.jpg",
            "https://i.ibb.co/zXn2w5N/ciaz-side.jpg",
            "https://i.ibb.co/T4X1K1R/ciaz-interior1.jpg",
            "https://i.ibb.co/xL2y94G/ciaz-interior2.jpg"
        ],
        description: "The Maruti Suzuki Ciaz is a mid-size sedan known for its elegant design, comfortable and spacious interiors, and efficient performance, catering to a premium segment."
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