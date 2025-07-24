function calculate(a, b, operation) {
  return operation(a, b);
}

// Example operations
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => y !== 0 ? x / y : "Cannot divide by zero";

console.log(calculate(10, 5, add));       // 15
console.log(calculate(10, 5, subtract));  // 5
console.log(calculate(10, 5, multiply));  // 50
console.log(calculate(10, 0, divide));    // Cannot divide by zero