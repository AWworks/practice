numbers = [3, 5, 7, 8, 9];

let evenOrOdd = numbers.map((n) => (n % 2 == 0 ? (n = 2 * n) : (n = n + 1)));

console.log(evenOrOdd);
