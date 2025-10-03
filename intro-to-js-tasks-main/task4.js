// var a = isNaN(‘11’);

// console.log(a); // false
var a = isNaN('11');
console.log(a); // false
// isNaN check the value is number or not.here "11" is string but it is a number.so it will return false.  

// **var a = isNaN(2-10);**
var b = isNaN(2-10);
console.log(b); // false
// isNaN check the value is number or not.here 2-10 is number so it will return false.
var c = isNaN(10);
console.log(c); // false
// isNaN check the value is number or not.here 10 is number so it will return false.    
var d = isNaN('topu');
console.log(d); // true
// isNaN check the value is number or not.here 'topu' is string and not a number.so it will return true.