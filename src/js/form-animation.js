const inputs = document.querySelectorAll(".input");
const labels = document.querySelectorAll(".label");
const textarea = document.querySelector("textarea");

textarea.value = "";

inputs.forEach((input, i) => {
    input.addEventListener("click", () => upLabel(input, i));
});

textarea.addEventListener("click", () => {
    labels[labels.length - 1].classList.add("up");
    textarea.addEventListener("blur", () => checkTextArea());
});

function upLabel(input, i) {
    labels[i].classList.add("up");
    input.addEventListener("blur", () => checkInput());
}

function checkInput() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            labels[i].classList.remove("up");
        } else {
            labels[i].classList.add("up");
        }
    }
}

function checkTextArea() {
    if (textarea.value === "") {
        labels[labels.length - 1].classList.remove("up");
    } else {
        labels[labels.length - 1].classList.add("up");
    }
}
