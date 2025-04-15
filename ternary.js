const numbers = [5, -2, 0, 8, -7];

numbers.forEach((num) => {
  // Check if Positive, Negative, or Zero
  const type = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";

  // Check Even or Odd (only if not zero)
  const oddEven = num === 0 ? "" : num % 2 === 0 ? "Even" : "Odd";

  // Print result
  console.log(`${num} is ${type}${oddEven ? " and " + oddEven : ""}.`);
});
