window.onload = function () {
  const ul = document.getElementById("shopping-list");

  const items = ["Item A", "Item B", "Item C"];
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
};
