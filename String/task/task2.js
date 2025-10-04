// Task-2:
// Count how many times a string has the letter a or A
let str = "I am a good developer. I am also a good dancer.";
let count = 0;

for(let i = 0; i < str.length; i++) {
    if(str[i] === 'a' || str[i] === 'A') {
        count++;
    }
}

console.log(count); 


