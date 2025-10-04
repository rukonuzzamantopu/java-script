// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
let str = "I am a good developer. I am also a good dancer.";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let hasAllVowels = true;

for(let i = 0; i < vowels.length; i++) {
    if(str.indexOf(vowels[i]) === -1) {
        hasAllVowels = false;
        break;
    }
}

console.log(hasAllVowels);
