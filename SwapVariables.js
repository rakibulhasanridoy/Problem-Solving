// ====================== Problem 1: Swap Two Variables ======================
// Description: Write a function that swaps the values of two variables without using a third variable.

function swapVariables(a, b) {
    console.log(`Before swapping: a = ${a}, b = ${b}`);
    
    // Using array destructuring (ES6 feature) to swap
    [a, b] = [b, a];
    
    console.log(`After swapping: a = ${a}, b = ${b}`);
    return [a, b];
}

// Example usage:
let x = 5;
let y = 10;
swapVariables(x, y);

// Another approach using arithmetic operators:
function swapWithArithmetic(a, b) {
    console.log(`Before swapping (Arithmetic): a = ${a}, b = ${b}`);
    
    a = a + b; // a becomes 15
    b = a - b; // b becomes 15 - 10 = 5
    a = a - b; // a becomes 15 - 5 = 10
    
    console.log(`After swapping (Arithmetic): a = ${a}, b = ${b}`);
    return [a, b];
}

swapWithArithmetic(20, 30);
