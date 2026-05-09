// Problem: Find the second largest element in an array without sorting it. (Sorting is $O(n \log n)$, examiners want $O(n)$)
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;



    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
     }
    return second;
}
const numbers = [10, 25, 5, 30, 25, 8];
const result = secondLargest(numbers);

console.log("The second largest number is:", result);