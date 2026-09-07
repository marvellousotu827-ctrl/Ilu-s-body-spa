const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("navigation");
const menuIcon = document.getElementById("icon");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});
