// ====================== Problem 2: Check Even or Odd ======================
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.

function isEven(n) {
    // Check if the remainder is 0 when divided by 2
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Shorter version using implicit return
const isEvenShort = (n) => n % 2 === 0;

// Example usage:
console.log(`Is 4 even? ${isEven(4)}`); // true
console.log(`Is 7 even? ${isEven(7)}`); // false

console.log(`Is 10 even? ${isEvenShort(10)}`); // true
console.log(`Is 15 even? ${isEvenShort(15)}`); // false
