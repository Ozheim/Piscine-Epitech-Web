plus = document.querySelector("footer button:nth-child(1)");
less = document.querySelector("footer button:nth-child(2)");
select = document.querySelector("select");
body = document.querySelector("body");

let click = 18;

plus.addEventListener("click", (e) => {
  res = "";
  click += 1;

  res = body.style.fontSize = click + "px";
});

less.addEventListener("click", (e) => {
  res = "";
  click -= 1;

  res = body.style.fontSize = click + "px";
});

select.addEventListener("change", () => {
  body.style.backgroundColor = select.value;
});
