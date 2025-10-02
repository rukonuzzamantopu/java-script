
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the mark of math: ", (math) => {
  rl.question("Enter the mark of biology: ", (bio) => {
rl.question("Enter the mark of chemistry: ", (chem) => {
  rl.question("Enter the mark of physics: ", (physics) => {
    rl.question("Enter the mark of bangla: ", (bangla) => {
      const remaining = parseInt(math, 10) + parseInt(bio, 10) + parseInt(chem, 10) + parseInt(physics, 10) + parseInt(bangla, 10);
      const average = remaining / 5;
console.log(average.toFixed(2));
        rl.close();
        });
      });
    });
  });
});