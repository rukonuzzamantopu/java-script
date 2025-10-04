// Task-5:
// Capitalize Every first Letter of each word in a String
let str = "i am a good developer. i am also a good dancer.";
let words = str.split(' '); 
for(let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
let newStr = words.join(' ');
console.log(newStr);

