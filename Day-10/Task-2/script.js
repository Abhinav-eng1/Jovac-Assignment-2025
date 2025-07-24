function calculateTax(amount, ...taxRates) {
  let totalTax = 0;
  taxRates.forEach(rate => {
    totalTax += (amount * rate) / 100;
  });
  return amount + totalTax;
}

// Example
console.log("Total with Tax:", calculateTax(100, 12, 18)); // Output: 130