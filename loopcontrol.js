// VIVA Problem: Write a program to find the first number divisible by both 3 and 5 from 1-100, but skip numbers divisible by 10.
for (let i = 1; i <= 100; i++) {
    if (i % 10 === 0) continue; 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
        break;
    }
}


