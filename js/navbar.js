$(document).ready(function () {
  console.log("hi");
  const hamburger = document.querySelector(".navbar .hamburger");
  const menuList = document.querySelector(".navbar .menu-list");

  hamburger.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });
});
