// Example using the rest operator in function parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Example using the rest operator in destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);
console.log(second);
console.log(rest);