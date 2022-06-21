// make mobile navigation work

const btnNav = document.querySelector(".btn-mobile-nav");
const navHeader = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  navHeader.classList.toggle("nav-open");
});
