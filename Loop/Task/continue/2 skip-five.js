/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for(let num = 61; num < 100; num=num+2){
    if(num % 5 === 0) {
        continue;
    }
    console.log(num);
}