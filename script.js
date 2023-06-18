let inputs = document.querySelectorAll(".input");
for (let input of inputs) {
    input.addEventListener("blur", func);
}
function func() {
    this.value = Number(this.value) + 1;
}
//  2
let text = document.querySelectorAll(".par");
for (let elem of text) {
    elem.addEventListener("click", func1);
}
function func1() {
    this.textContent = Math.pow(Number(this.textContent), 2)
}