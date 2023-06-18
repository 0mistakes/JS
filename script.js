let elem = document.querySelector("#elem");
let p = document.querySelector('p')

elem.addEventListener("input", function () {
    p.textContent = this.value;
});