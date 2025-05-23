const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", function () {
  console.log("Menu toggle clicked");
  mainNav.classList.toggle("active");
  this.classList.toggle("active");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});
