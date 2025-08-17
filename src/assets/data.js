import { v4 as uuid } from "uuid";

export const brandsData = [
    {
        id: uuid(),
        cardBanner: "/images/cars/ferraribanner.webp",
        brandName: "Ferrari",
        logo: "/images/ferrari-icon.svg",
        description: "Pure Italian power and passion with iconic design.",
        url: "/brands/ferrari"
    },
    {
        id: uuid(),
        cardBanner: "/images/cars/lamborghini.webp",
        brandName: "Lamborghini",
        logo: "/images/lamborghini-icon.svg",
        description: "Sharp lines and roaring engines — the bull never rests.",
        url: "/brands/lamborghini"
    },
    {
        id: uuid(),
        cardBanner: "/images/cars/bugatti.webp",
        brandName: "Bugatti",
        logo: "/images/bugatti-icon.png",
        description: "Engineering perfection and luxury at over 400 km/h.",
        url: "/brands/bugatti"
    },
    {
        id: uuid(),
        cardBanner: "/images/cars/mclaren.webp",
        brandName: "McLaren",
        logo: "/images/mclaren-icon.png",
        description: "F1 legacy meets next-gen innovation.",
        url: "/brands/mclaren"
    }
];

export const featuredCars = [
    {
        id: uuid(),
        carName: "Ferrari SF90 Stradale",
        image: "https://images.pexels.com/photos/12801134/pexels-photo-12801134.jpeg?cs=srgb&dl=pexels-introspectivedsgn-12801134.jpg&fm=jpg"
    },
    {
        id: uuid(),
        carName: "Lamborghini Revuelto",
        image: "https://www.hdwallpapers.in/download/white_lamborghini_revuelto_car_4k_5k_hd_cars-5120x2880.jpg"
    },
    {
        id: uuid(),
        carName: "Bugatti Chiron Super Sport",
        image: "https://images.hdqwalls.com/wallpapers/bugatti-chiron-rear-4k-8p.jpg"
    },
    {
        id: uuid(),
        carName: "McLaren P1",
        image: "https://images.unsplash.com/photo-1592199299806-e7349699f6a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWNsYXJlbiUyMHAxfGVufDB8fDB8fHww"
    }
];


export const comparisonCars = [
    {
        id: uuid(),
        name: "Ferrari SF90 Stradale",
        brand: "Ferrari",
        image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Ferrari/SF90-Stradale/7858/1591619661237/front-left-side-47.jpg",
        horsepower: "986 HP",
        acceleration: "2.5s",
        topSpeed: "340 km/h",
        weight: "1570 kg"
    },
    {
        id: uuid(),
        name: "Lamborghini Aventador SVJ",
        brand: "Lamborghini",
        image: "https://assets.dyler.com/uploads/cars/355070/7669973/medium_c8a7550b-ab09-4293-a1a4-cc5f2bd9ffe4.jpg",
        horsepower: "770 HP",
        acceleration: "2.8s",
        topSpeed: "350 km/h",
        weight: "1525 kg"
    },
    {
        id: uuid(),
        name: "Bugatti Chiron Super Sport",
        brand: "Bugatti",
        image: "https://placervial.com/wp-content/uploads/2019/09/Bugatti-Chiron-Supersport-300-01.jpg",
        horsepower: "1578 HP",
        acceleration: "2.4s",
        topSpeed: "490 km/h",
        weight: "1995 kg"
    },
    {
        id: uuid(),
        name: "McLaren P1",
        brand: "McLaren",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/2013-03-05_Geneva_Motor_Show_7846.JPG",
        horsepower: "903 HP",
        acceleration: "2.7s",
        topSpeed: "350 km/h",
        weight: "1490 kg"
    }
]