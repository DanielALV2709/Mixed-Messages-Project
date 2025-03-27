const names = ["Dani"];
const animals = [
    "dog", "cat", "elephant", "lion", "tiger",
    "giraffe", "monkey", "bear", "zebra", "hippopotamus",
    "rhinoceros", "crocodile", "panda", "koala",
    "penguin", "eagle", "dolphin", "whale",
    "shark", "horse"
];
const characteristics = [
    "fast", "fierce", "cheerful", "peaceful", "curious", "shy",
    "playful", "territorial", "intelligent", "loyal", "calm",
    "aggressive", "social", "solitary", "clever", "noisy", "stealthy",
    "protective", "independent", "affectionate"
];
const mixedMessage = (name) => {
    // Genera un índice aleatorio entre 0 y la longitud del array animals - 1
    const randomAnimIndex = Math.floor(Math.random() * animals.length);
    
    // Guarda el animal aleatorio en la variable animal
    const animal = animals[randomAnimIndex];
    
    // Genera un índice aleatorio entre 0 y la longitud del array characteristics - 1
    const randomCharIndex = Math.floor(Math.random() * characteristics.length);
    const characteristic = characteristics[randomCharIndex];
    
    // Genera un índice aleatorio entre 0 y 32 años
    const randomYears = Math.floor(Math.random() * 32 + 1);

    console.log(`Hi ${name} in your next live you\`ll be a ${animal} because you are very 
        ${characteristic} and your animal life will last ${randomYears} years.`)
}

mixedMessage(names[0]);
