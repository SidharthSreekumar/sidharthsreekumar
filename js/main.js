const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector("nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const discordIcon = document.querySelector(".discord-icon");
const discordPopup = document.querySelector(".discord-popup");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

discordIcon.addEventListener("click", showPopup);

let isPopupActive = false;
function showPopup() {
  if (!isPopupActive) discordPopup.classList.add("active");
  isPopupActive = true;
  setTimeout(() => {
    discordPopup.classList.remove("active");
    isPopupActive = false;
  }, 2000);
}
