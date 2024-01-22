// Example 3 - Map, Filter, Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using map to double each number
const doubledNumbers = numbers.map(num => num * 2);

// Using filter to get only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Using reduce to calculate the sum of even numbers
const sumOfEvenNumbers = evenNumbers.reduce((acc, curr) => acc + curr, 0); // 0-> initial value of acc

console.log("Original Numbers:", numbers);
console.log("Doubled Numbers:", doubledNumbers);
console.log("Even Numbers:", evenNumbers);
console.log("Sum of Even Numbers:", sumOfEvenNumbers);