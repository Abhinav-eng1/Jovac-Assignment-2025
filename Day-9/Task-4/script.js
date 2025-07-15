window.onload = function () {
  const featuresDiv = document.getElementById("features");
  const paragraphs = featuresDiv.querySelectorAll("p");
  paragraphs.forEach(p => {
    p.textContent = "✓ " + p.textContent;
  });
};
