let input = document.querySelector('#input');
input.addEventListener('focus', funcFocus);
function funcFocus() {
    this.value = '1';
};
input.addEventListener('blur', funcBlur);
function funcBlur() {
    this.value = '2';
};
//  2
let button = document.querySelector("#btn");
button.addEventListener("click", addOne);
function addOne() {
let sum = (Number(this.textContent) + 1 )
    this.textContent = sum
}