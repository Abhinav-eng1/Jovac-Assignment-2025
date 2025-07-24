function isEven(n) {
  if (n < 0) return isEven(-n);  // Handle negative numbers
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
}

// Example
console.log(isEven(10)); // true
console.log(isEven(7));  // false