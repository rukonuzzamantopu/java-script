let age = 65; 
let isStudent = false; 
let fare;

if (age < 10) {
    fare = 0;
} else if (isStudent) {
    fare = 800 * 0.5;
} else if (age >= 60) {
    fare = 800 * 0.85;
} else {
    fare = 800;
}

console.log(`The ticket fare is: ${fare} tk`);
