let weight = 70;
let height = 1.75;

let bmi = weight / (height * height);
let category;

if (bmi < 18.5) {
    category = "You are underweight.";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "You are normal.";
} else if (bmi >= 25 && bmi <= 29.9) {
    category = "You are overweight.";
} else {
    category = "You are obese.";
}

console.log(`Your BMI is ${bmi.toFixed(2)}. ${category}`);
