// Data store remains the same, simulating a database structure
const carsData = {
  scorpio: {
    name: "Mahindra Scorpio",
    price: "₹13.77 - 17.72 Lakh*",
    image: "image/Scorpio.jpg",
    specs: {
      Engine: "2197 cc",
      Power: "130 bhp",
      Torque: "300 Nm",
      Seating: "7",
      Mileage: "15 kmpl",
      Drive: "RWD / AWD"
    },
    variants: [
      { name: "Scorpio S3", price: "₹13.77 Lakh*" },
      { name: "Scorpio S7", price: "₹15.20 Lakh*" },
      { name: "Scorpio S11", price: "₹17.72 Lakh*" }
    ],
    thumbnails: [
      "image/scorpio_front.jpg",
      "image/scorpio_back.jpg",
      "image/scorpio_side.jpg",
      "image/scorpio_interior1.jpg",
      "image/scorpio_interior2.jpg"
    ],
    description: "The Mahindra Scorpio is a rugged SUV known for its muscular design, powerful engine, and comfortable seating for long journeys."
  },

  rangeRover: {
    name: "TATA Range Rover",
    price: "₹11.11 - 20.15 Lakh*",
    image: "image/Range.jpg",
    specs: {
      Engine: "1999 cc",
      Power: "250 bhp",
      Torque: "365 Nm",
      Seating: "5",
      Mileage: "12.5 kmpl",
      Drive: "AWD"
    },
    variants: [
      { name: "Range Rover XE", price: "₹11.11 Lakh*" },
      { name: "Range Rover XM", price: "₹15.55 Lakh*" },
      { name: "Range Rover XL", price: "₹20.15 Lakh*" }
    ],
    thumbnails: [
      "image/range_front.jpg",
      "image/range_back.jpg",
      "image/range_side.jpg",
      "image/range_interior1.jpg",
      "image/range_interior2.jpg"
    ],
    description: "The Range Rover blends luxury with capability, offering refined interiors, advanced features, and impressive off-road performance."
  },

  gloster: {
    name: "MG Gloster",
    price: "₹33.43 - 51.44 Lakh*",
    image: "image/Gloster.jpg",
    specs: {
      Engine: "1996 cc",
      Power: "215 bhp",
      Torque: "478 Nm",
      Seating: "6/7",
      Mileage: "12 kmpl",
      Drive: "4WD"
    },
    variants: [
      { name: "Gloster Sharp", price: "₹33.43 Lakh*" },
      { name: "Gloster Savvy", price: "₹41.99 Lakh*" },
      { name: "Gloster Blackstorm", price: "₹51.44 Lakh*" }
    ],
    thumbnails: [
      "image/gloster_front.jpg",
      "image/gloster_back.jpg",
      "image/gloster_side.jpg",
      "image/gloster_interior1.jpg",
      "image/gloster_interior2.jpg"
    ],
    description: "The MG Gloster is a premium SUV offering luxury features, advanced safety, and powerful performance for adventurous drives."
  },

  curve: {
    name: "TATA EV Curve",
    price: "₹14.94 - 22.35 Lakh*",
    image: "image/Curve.jpg",
    specs: {
      Engine: "Electric",
      Power: "168 bhp",
      Torque: "280 Nm",
      Seating: "5",
      Range: "450 km/charge",
      Drive: "FWD"
    },
    variants: [
      { name: "Curve Base", price: "₹14.94 Lakh*" },
      { name: "Curve Mid", price: "₹18.50 Lakh*" },
      { name: "Curve Max", price: "₹22.35 Lakh*" }
    ],
    thumbnails: [
      "image/curve_front.jpg",
      "image/curve_back.jpg",
      "image/curve_side.jpg",
      "image/curve_interior1.jpg",
      "image/curve_interior2.jpg"
    ],
    description: "The TATA EV Curve is an all-electric SUV designed for modern urban lifestyles, offering long range, futuristic design, and eco-friendly performance."
  },

  mustang: {
    name: "Mustang Vintage",
    price: "₹4.50 - 6.00 Lakh*",
    image: "image/mustamg.jpg",
    specs: {
      Engine: "1998 cc",
      Power: "210 bhp",
      Torque: "320 Nm",
      Seating: "4",
      Mileage: "12.8 kmpl",
      Drive: "RWD"
    },
    variants: [
      { name: "Mustang Base", price: "₹4.50 Lakh*" },
      { name: "Mustang Sport", price: "₹6.00 Lakh*" }
    ],
    thumbnails: [
      "image/mustang_front.jpg",
      "image/mustang_back.jpg",
      "image/mustang_side.jpg",
      "image/mustang_interior1.jpg",
      "image/mustang_interior2.jpg"
    ],
    description: "The Mustang Vintage is a stylish sports car with classic muscle car appeal, blending raw power with iconic design."
  },

  coriza: {
    name: "Coriza Vintage",
    price: "₹5.60 - 8.20 Lakh*",
    image: "image/coriza.jpg",
    specs: {
      Engine: "1796 cc",
      Power: "150 bhp",
      Torque: "250 Nm",
      Seating: "4",
      Mileage: "14.2 kmpl",
      Drive: "RWD"
    },
    variants: [
      { name: "Coriza Classic", price: "₹5.60 Lakh*" },
      { name: "Coriza Deluxe", price: "₹8.20 Lakh*" }
    ],
    thumbnails: [
      "image/coriza_front.jpg",
      "image/coriza_back.jpg",
      "image/coriza_side.jpg",
      "image/coriza_interior1.jpg",
      "image/coriza_interior2.jpg"
    ],
    description: "The Coriza Vintage combines elegance and performance, ideal for those who love retro styling with modern driving comfort."
  },

  retro: {
    name: "White Classic Retro",
    price: "₹6.00 - 9.03 Lakh*",
    image: "image/Retro.jpg",
    specs: {
      Engine: "1600 cc",
      Power: "120 bhp",
      Torque: "200 Nm",
      Seating: "4",
      Mileage: "15 kmpl",
      Drive: "RWD"
    },
    variants: [
      { name: "Retro Base", price: "₹6.00 Lakh*" },
      { name: "Retro Premium", price: "₹9.03 Lakh*" }
    ],
    thumbnails: [
      "image/retro_front.jpg",
      "image/retro_back.jpg",
      "image/retro_side.jpg",
      "image/retro_interior1.jpg",
      "image/retro_interior2.jpg"
    ],
    description: "The White Classic Retro is a vintage-inspired car offering simplicity, charm, and practicality for daily drives."
  },

  delta: {
    name: "Delta Sedam",
    price: "₹7.04 - 11.21 Lakh*",
    image: "image/delta.jpg",
    specs: {
      Engine: "1498 cc",
      Power: "118 bhp",
      Torque: "145 Nm",
      Seating: "5",
      Mileage: "18.3 kmpl",
      Drive: "FWD"
    },
    variants: [
      { name: "Delta XE", price: "₹7.04 Lakh*" },
      { name: "Delta XM", price: "₹9.50 Lakh*" },
      { name: "Delta XL", price: "₹11.21 Lakh*" }
    ],
    thumbnails: [
      "image/delta_front.jpg",
      "image/delta_back.jpg",
      "image/delta_side.jpg",
      "image/delta_interior1.jpg",
      "image/delta_interior2.jpg"
    ],
    description: "The Delta Sedan is a practical family car, combining affordability, efficiency, and comfort for long trips."
  },

  fortuner: {
    name: "Toyota Fortuner",
    price: "₹17.00 - 24.00 Lakh*",
    image: "image/Fortuner.jpg",
    specs: {
      Engine: "2694 cc",
      Power: "164 bhp",
      Torque: "245 Nm",
      Seating: "7",
      Mileage: "10.01 kmpl",
      Drive: "4WD"
    },
    variants: [
      { name: "Fortuner Base", price: "₹17.00 Lakh*" },
      { name: "Fortuner Premium", price: "₹24.00 Lakh*" }
    ],
    thumbnails: [
      "image/fortuner_front.jpg",
      "image/fortuner_back.jpg",
      "image/fortuner_side.jpg",
      "image/fortuner_interior1.jpg",
      "image/fortuner_interior2.jpg"
    ],
    description: "The Toyota Fortuner is a tough and reliable SUV, built for both city driving and challenging terrains."
  },

  carens: {
    name: "Kia Carens",
    price: "₹10.45 - 18.95 Lakh*",
    image: "image/Carens.jpg",
    specs: {
      Engine: "1497 cc",
      Power: "113 bhp",
      Torque: "144 Nm",
      Seating: "7",
      Mileage: "16.5 kmpl",
      Drive: "FWD"
    },
    variants: [
      { name: "Carens Premium", price: "₹10.45 Lakh*" },
      { name: "Carens Luxury", price: "₹18.95 Lakh*" }
    ],
    thumbnails: [
      "image/carens_front.jpg",
      "image/carens_back.jpg",
      "image/carens_side.jpg",
      "image/carens_interior1.jpg",
      "image/carens_interior2.jpg"
    ],
    description: "The Kia Carens is a versatile MPV offering premium interiors, safety, and comfort for large families."
  },

  innova: {
    name: "Toyota Innova",
    price: "₹17.00 - 24.00 Lakh*",
    image: "image/Innova.jpg",
    specs: {
      Engine: "2393 cc",
      Power: "150 bhp",
      Torque: "343 Nm",
      Seating: "7",
      Mileage: "12.99 kmpl",
      Drive: "RWD"
    },
    variants: [
      { name: "Innova GX", price: "₹17.00 Lakh*" },
      { name: "Innova ZX", price: "₹24.00 Lakh*" }
    ],
    thumbnails: [
      "image/innova_front.jpg",
      "image/innova_back.jpg",
      "image/innova_side.jpg",
      "image/innova_interior1.jpg",
      "image/innova_interior2.jpg"
    ],
    description: "The Toyota Innova is India’s most loved MPV, known for reliability, comfort, and spacious seating for families."
  },

  jimny: {
    name: "Maruti Jimny",
    price: "₹13.41 - 15.70 Lakh*",
    image: "image/Jimny.jpg",
    specs: {
      Engine: "1462 cc",
      Power: "105 bhp",
      Torque: "134 Nm",
      Seating: "4",
      Mileage: "16.94 kmpl",
      Drive: "4WD"
    },
    variants: [
      { name: "Jimny Zeta", price: "₹13.41 Lakh*" },
      { name: "Jimny Alpha", price: "₹15.70 Lakh*" }
    ],
    thumbnails: [
      "image/jimny_front.jpg",
      "image/jimny_back.jpg",
      "image/jimny_side.jpg",
      "image/jimny_interior1.jpg",
      "image/jimny_interior2.jpg"
    ],
    description: "The Maruti Jimny is a compact 4x4 SUV perfect for adventurous off-road trips and city commutes."
  },

  rangeRoverSE: {
    name: "Range Rover Super Edition",
    price: "₹55.00 Lakh*",
    image: "image/rower.jpg",
    specs: {
      Engine: "2997 cc",
      Power: "345 bhp",
      Torque: "700 Nm",
      Seating: "5",
      Mileage: "11 kmpl",
      Drive: "AWD"
    },
    variants: [
      { name: "Range Rover SE", price: "₹55.00 Lakh*" }
    ],
    thumbnails: [
      "image/rangeroverse_front.jpg",
      "image/rangeroverse_back.jpg",
      "image/rangeroverse_side.jpg",
      "image/rangeroverse_interior1.jpg",
      "image/rangeroverse_interior2.jpg"
    ],
    description: "The Range Rover Super Edition is a luxury SUV offering unmatched refinement, comfort, and off-road capability."
  },

  defender: {
    name: "Land Rover Defender",
    price: "₹61.00 Lakh*",
    image: "image/Defender.jpg",
    specs: {
      Engine: "1997 cc",
      Power: "296 bhp",
      Torque: "400 Nm",
      Seating: "5, 6, 7",
      Mileage: "14.01 kmpl",
      Drive: "AWD"
    },
    variants: [
      { name: "Defender 90", price: "₹61.00 Lakh*" },
      { name: "Defender 110", price: "₹85.00 Lakh*" },
      { name: "Defender 130", price: "₹1.20 Crore*" }
    ],
    thumbnails: [
      "image/defender_front.jpg",
      "image/defender_back.jpg",
      "image/defender_side.jpg",
      "image/defender_interior1.jpg",
      "image/defender_interior2.jpg"
    ],
    description: "The Land Rover Defender is built tough for extreme terrains while maintaining modern luxury and comfort."
  },

  gwagen: {
    name: "Mercedes G-Wagen",
    price: "₹75.00 Lakh*",
    image: "image/G-wagen.jpg",
    specs: {
      Engine: "2925 cc",
      Power: "330 bhp",
      Torque: "700 Nm",
      Seating: "5",
      Mileage: "8.13 kmpl",
      Drive: "AWD"
    },
    variants: [
      { name: "G-Wagen Base", price: "₹75.00 Lakh*" }
    ],
    thumbnails: [
      "image/gwagen_front.jpg",
      "image/gwagen_back.jpg",
      "image/gwagen_side.jpg",
      "image/gwagen_interior1.jpg",
      "image/gwagen_interior2.jpg"
    ],
    description: "The Mercedes G-Wagen is a luxury off-roader, combining iconic design with world-class performance and durability."
  },

  rollsroyce: {
    name: "Rolls Royce",
    price: "₹71.60 Lakh*",
    image: "image/Rolls.jpg",
    specs: {
      Engine: "6750 cc",
      Power: "563 bhp",
      Torque: "820 Nm",
      Seating: "4",
      Mileage: "7.1 kmpl",
      Drive: "RWD"
    },
    variants: [
      { name: "Rolls Royce Ghost", price: "₹71.60 Lakh*" }
    ],
    thumbnails: [
      "image/rolls_front.jpg",
      "image/rolls_back.jpg",
      "image/rolls_side.jpg",
      "image/rolls_interior1.jpg",
      "image/rolls_interior2.jpg"
    ],
    description: "The Rolls Royce Ghost symbolizes luxury, handcrafted excellence, and a smooth ride like no other."
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