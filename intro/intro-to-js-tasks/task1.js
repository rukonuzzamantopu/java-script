// const a = prompt("Enter take you have");
// const b = prompt("the cost of 1 kg of orange");
// const c = a - b;
// console.log(c);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the taka you have: ", (taka) => {
  rl.question("Enter the total cost: ", (cost) => {
    const remaining = parseInt(taka, 10) - parseInt(cost, 10);
    console.log("Remaining:", remaining);
    rl.close();
  });
});

