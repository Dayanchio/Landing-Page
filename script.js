const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const openMenu = () => {
  mobileNav.classList.add("open");
  menuBtn.classList.add("open");
  menuBtn.setAttribute("aria-expanded", "true");
};
const closeMenu = () => {
  mobileNav.classList.remove("open");
  menuBtn.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
};
menuBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});
mobileNav.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  closeMenu();
});
document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileNav.classList.contains("open")) {
    closeMenu();
  }
});
