window.onload = function () {
  const names = ["Grace", "Arpit", "Lokendra", "Satyam"];
  const ol = document.createElement("ol");

  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    ol.appendChild(li);
  });

  document.body.appendChild(ol);
};
