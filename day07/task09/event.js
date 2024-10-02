const button = document.querySelector("button");
const p = document.querySelectorAll("p");

button.addEventListener("click", function () {
  for (let i = 0; i < p.length; i++) {
    p[i].style.display = "none";
  }
});
