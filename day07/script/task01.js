div = document.querySelector("footer div");

let c = 0;

div.addEventListener("click", () => {
  c += 1;
  div.textContent = c;
});
