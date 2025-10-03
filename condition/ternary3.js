let price = 500;
const isLeader = true;

// Feel free to ignore this one
// price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 1000;
price = isLeader === true ? 
            price > 1000 ? 
                price /2 : 0 
        : price + 1000;

console.log(price);