const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((p) => {
  p.addEventListener("mouseover", () => {
    p.classList.add("blue");
  });

  p.addEventListener("mouseout", () => {
    p.classList.remove("blue");
  });

  p.addEventListener("click", () => {
    p.classList.toggle("highlighted");
  });
});
