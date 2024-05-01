const menuButton = document.querySelector(".mobile-menu");
const menuIcon = document.querySelectorAll(".mobile-menu div");
const menu = document.querySelector(".menu");
const lightModeIcon = document.querySelector(".light-mode");
const main = document.querySelector("main");
const itemMenu = document.querySelectorAll(".menu li a");

menuButton.addEventListener("click", openCloseMenu);

itemMenu.forEach((link) => {
    link.addEventListener("click", openCloseMenu);
});

function blurPage() {
    main.classList.contains("blur")
        ? main.classList.remove("blur")
        : main.classList.add("blur");
}

function openCloseMenu() {
    menu.classList.contains("active")
        ? menu.classList.remove("active")
        : menu.classList.add("active");
    animationMenu();
    blurPage();
    menuIconAnimation();
}

function menuIconAnimation() {
    menuIcon.forEach((line) => {
        line.classList.toggle("active");
    });
}

function animationMenu() {
    itemMenu.forEach((link, i) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `itemMenuAnimation 0.5s ease forwards
            ${i / 7 + 0.3}s`);
    });
}
