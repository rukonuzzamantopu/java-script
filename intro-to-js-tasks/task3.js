const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the taka you have: ", (taka) => {
    const remaining = parseInt(taka, 10) % parseInt(5, 10)   ;
    console.log("Remaining:", remaining);
    rl.close();
  });

