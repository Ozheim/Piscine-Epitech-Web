const links = document.querySelectorAll("a");

links.forEach((link) => {
  if (link.target !== "_blank") {
    link.style.opacity = "0.5";
  }
});
