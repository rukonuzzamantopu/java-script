// Take input from the user
let totalMoney = parseFloat(prompt("Enter the amount of money you have:"));
let totalCost = parseFloat(prompt("Enter the total cost of 1 kg of oranges and 1 kg of apples:"));

// Calculate how much you'll have left after shopping
let moneyLeft = totalMoney - totalCost;

// Output the result
alert("Money left: " + moneyLeft);
console.log("Money left:", moneyLeft);
