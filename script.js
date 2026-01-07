const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
menuBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});
const openMenu = () => {
  mobileNav.classList.add("open");
  menuBtn.classList.add("open");
};
const closeMenu = () => {
  mobileNav.classList.remove("open");
  menuBtn.classList.remove("open");
};
mobileNav.addEventListener("click", () => {
  closeMenu();
});
