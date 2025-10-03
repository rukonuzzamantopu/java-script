let price = 500;
const isLeader = false;

// if(isLeader === true){
//     price = 0;
// }
// else {
//     price = price + 100;
// }
// console.log(price)


price = isLeader === true ? 0 : price + 100;
// OPTIONAL: semi-advanced ternary
console.log(price);