window.onload = function () {
  const list = document.getElementById("my-list");
  const secondLi = list.children[1];
  if (secondLi) {
    list.removeChild(secondLi);
  }
};
