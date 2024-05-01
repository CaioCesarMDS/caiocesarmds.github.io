const list = document.querySelector(".slider");
const items = list.querySelectorAll(".item");

let active = 0;
let lengthItems = items.length - 1;

function nextSlider() {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active++;
    }
    reloadSlider();
}

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";
}

setInterval(() => {
    nextSlider();
}, 3000);

// Categories buttons
const categories = document.querySelectorAll(".categories button");

categories.forEach((category) => {
    category.addEventListener("click", () => {
        categories.forEach((category) => {
            category.classList.remove("active");
        });
        category.classList.add("active");
    });
});

// Filter by categories
const languages = document.querySelectorAll(".languages");
const frameworks = document.querySelectorAll(".frameworks");
const tools = document.querySelectorAll(".tools");

frameworks.forEach((framework) => (framework.style.display = "none"));
tools.forEach((tool) => (tool.style.display = "none"));

const itens = [languages, frameworks, tools];

categories.forEach((category) => {
    category.addEventListener("click", () => {
        itens.forEach((item) => {
            item.forEach((element) => {
                const elementClass = element.className.split(" ")[1];
                element.style.display = "none";
                if (category.value === elementClass) {
                    element.style.display = "block";
                }
            });
        });
    });
});
