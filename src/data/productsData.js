const products = [
    {
        id: 1,
        name: "LEGO Classic Bricks and Animals",
        price: 29.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt6a00d689afeb7ac6/10416_alt1.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "A versatile set of colorful bricks and pieces for endless creative play.",
        quantity: 100,
        brand: "LEGO"
    },
    {
        id: 2,
        name: "LEGO Star Wars X-Wing Starfighter",
        price: 49.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt3e07af4c83a87efd/75355.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Build your own X-Wing Starfighter and join the Rebel Alliance.",
        quantity: 50,
        brand: "LEGO"
    },
    {
        id: 3,
        name: "LEGO Lamborghini Huracán Tecnica",
        price: 379.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt43ee5a1d2bc6afe0/42161.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "A stunning 1:8 scale LEGO model of the Lamborghini Huracán Tecnica.",
        quantity: 20,
        brand: "LEGO"
    },
    {
        id: 4,
        name: "LEGO Harry Potter Hogwarts Castle",
        price: 399.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blte09f96efc93d5c1d/76419.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Explore the magical world of Hogwarts with this detailed LEGO set.",
        quantity: 30,
        brand: "LEGO"
    },
    {
        id: 5,
        name: "LEGO City Police Station",
        price: 59.99,
        image: "https://www.lego.com/cdn/cs/set/assets/bltf2fa832d9de1d829/60316.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Protect the city with this comprehensive police station set.",
        quantity: 75,
        brand: "LEGO"
    },
    {
        id: 6,
        name: "LEGO Creator 3-in-1 Pirate Ship",
        price: 99.99,
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/37721256/3009032674.jpg",
        description: "Set sail on the high seas with this awesome 3-in-1 pirate ship.",
        quantity: 45,
        brand: "LEGO"
    },
    {
        id: 7,
        name: "LEGO Marvel Spider-Man Webquarters Hangout",
        price: 39.99,
        image: "https://www.lego.com/cdn/cs/set/assets/bltb55abb554cf2a99d/10794.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Join Spider-Man and his friends at their Webquarters Hangout.",
        quantity: 60,
        brand: "LEGO"
    },
    {
        id: 8,
        name: "LEGO NINJAGO Fire Stone Mech",
        price: 69.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt0192c0588136894c/71808.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Battle the forces of evil with the mighty Fire Stone Mech.",
        quantity: 40,
        brand: "LEGO"
    },
    {
        id: 9,
        name: "LEGO Friends Heartlake City Amusement Pier",
        price: 129.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt748ddbf37ffe52df/42630.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Enjoy a fun day at the Heartlake City Amusement Pier with your LEGO Friends.",
        quantity: 25,
        brand: "LEGO"
    },
    {
        id: 10,
        name: "LEGO Architecture Statue of Liberty",
        price: 119.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt878ae2d69f884c71/21042_Prod.png?format=webply&fit=bounds&quality=60&width=1200&height=1200&dpr=2",
        description: "Recreate the iconic Statue of Liberty with this detailed LEGO set.",
        quantity: 15,
        brand: "LEGO"
    },
    {
        id: 11,
        name: "LEGO McLaren P1™",
        price: 349.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt519dac201a3dd4c1/42172.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Build the famous McLaren P1™ with this intricate LEGO Technic model.",
        quantity: 10,
        brand: "LEGO"
    },
    {
        id: 12,
        name: "LEGO NASA Apollo 11 Lunar Lander",
        price: 119.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt5e2703640ec85d2a/10266.jpg?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Recreate the iconic Apollo 11 Lunar Lander with this detailed LEGO Ideas set.",
        quantity: 40,
        brand: "LEGO"
    },
    {
        id: 13,
        name: "LEGO Robot World Roller-Coaster Park",
        price: 179.99,
        image: "https://www.lego.com/cdn/cs/set/assets/bltdddda97237b3182f/60421.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Experience the thrills of a Robot World Roller-Coaster Park with this exciting LEGO Creator set.",
        quantity: 25,
        brand: "LEGO"
    },
    {
        id: 14,
        name: "LEGO Speed Champions Ferrari F40 Supercar",
        price: 19.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt08aac0509cd0f13d/76934_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Build a detailed model of the Ferrari F40 Supercar with this LEGO Speed Champions set.",
        quantity: 60,
        brand: "LEGO"
    },
    {
        id: 15,
        name: "LEGO Horse and Pony Trailer",
        price: 29.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt6f76e7c51da41ec9/42634_alt1.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Horse and Pony Trailer fun LEGO Friends set.",
        quantity: 55,
        brand: "LEGO"
    },
    {
        id: 16,
        name: "LEGO Andrea's Modern Mansion",
        price: 49.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt2e01103c8540f375/42639_alt1.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Join the Andrea's Modern Mansion LEGO Creator set.",
        quantity: 35,
        brand: "LEGO"
    },
    {
        id: 17,
        name: "LEGO The Windmill Farm",
        price: 149.99,
        image: "https://www.lego.com/cdn/cs/set/assets/bltbfaea9b0daa92c58/21262.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Explore The Windmill Farm with this detailed LEGO set.",
        quantity: 20,
        brand: "LEGO"
    },
    {
        id: 18,
        name: "LEGO Ahsoka Tano's T-6 Jedi Shuttle",
        price: 179.99,
        image: "https://www.lego.com/cdn/cs/set/assets/blt3a5fb2c3232a182b/75362.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Build and fly the Ahsoka Tano's T-6 Jedi Shuttle from the Star Wars universe.",
        quantity: 15,
        brand: "LEGO"
    },
    {
        id: 19,
        name: "LEGO Red London Telephone Box",
        price: 59.99,
        image: "https://www.lego.com/cdn/cs/set/assets/bltf2c1ab43ea784beb/21347.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Recreate the iconic Red London Telephone Box with this LEGO Architecture set.",
        quantity: 30,
        brand: "LEGO"
    },
    {
        id: 20,
        name: "LEGO Tree House",
        price: 199.99,
        image: "https://www.lego.com/cdn/cs/set/assets/bltd47a4d542f2a6d2d/21318_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
        description: "Build a detailed treehouse with this versatile LEGO Creator set.",
        quantity: 10,
        brand: "LEGO"
    }
];

export default products;
