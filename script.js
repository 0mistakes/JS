let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
    elem.disabled = !elem.disabled;
});