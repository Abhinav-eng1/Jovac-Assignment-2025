window.onload = function () {
  const oldPara = document.getElementById("old-paragraph");
  const newPara = document.createElement("p");
  newPara.textContent = "This paragraph was replaced!";
  oldPara.replaceWith(newPara);
};
