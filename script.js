const button = document.querySelector(".arrow");
const row = document.querySelector("nav");

button.addEventListener("click", function () {
    button.classList.toggle("on");
    row.classList.toggle("on");
})