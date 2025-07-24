function countdown(n) {
  const interval = setInterval(() => {
    if (n > 0) {
      console.log(n--);
    } else {
      console.log("🚀 Blast Off!");
      clearInterval(interval);
    }
  }, 1000);
}

// Example
countdown(5);