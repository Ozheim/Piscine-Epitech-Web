whitebox = document.querySelector("footer div");
let c = 0;
let string = "";
window.addEventListener("keyup", (e) => {
  c++;
  string += e.key;
  whitebox.textContent = string;

  if (c >= 42) string = string.substring(1);
});
