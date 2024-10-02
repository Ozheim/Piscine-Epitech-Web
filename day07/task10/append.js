const button = document.querySelector("button");
const input = document.getElementById("listItem");

button.addEventListener("click", function () {
  const div = document.createElement("div");
  div.textContent = input.value;
  input.parentNode.appendChild(div); // parentNode ca prend le parent et ca lui ajoute div a la fin
});
