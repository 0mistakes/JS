let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector("#button");
let p = document.querySelector("p");

button.addEventListener("click", function () {
    for (let radio of radios) {
        if (radio.checked) {
            p.textContent = radio.value;
        }
    }
});