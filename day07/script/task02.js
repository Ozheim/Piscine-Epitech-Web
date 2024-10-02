div = document.querySelector("footer div");

div.addEventListener("click", () => {
  let person = window.prompt("what's your name ?");
  if (confirm("Are you sure that " + person + " is your name?")) {
    alert("hello " + person);
    div.textContent = person;
  }
});
