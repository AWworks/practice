const strings = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];

const longStrings = strings.filter((str) => str.length > 5);
const upperCaseStrings = longStrings.map((str) => str.toUpperCase());
const containsA = strings.filter(
  (str) => str.includes("a") || str.includes("A")
);
const processedStrings = strings.map((str) => `${str} - Processed`);

console.log("Long Strings:", longStrings);
console.log(upperCaseStrings);
console.log(containsA);
console.log(processedStrings);
