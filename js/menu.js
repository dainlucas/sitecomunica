document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".main-nav").classList.toggle("active");
  this.classList.toggle("active");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".main-nav").classList.remove("active");
    document.querySelector(".menu-toggle").classList.remove("active");
  });
});
