let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
let p5 = document.querySelector('#p5');

p1.addEventListener("click", func);
p2.addEventListener("click", func);
p3.addEventListener("click", func);
p4.addEventListener("click", func);
p5.addEventListener("click", func);

function func() {
    this.textContent += '!'
}
//   2
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');

input1.addEventListener("blur", func1);
input2.addEventListener("blur", func1);
input3.addEventListener("blur", func1);

function func1() {
    this.value = Math.pow(Number(this.value), 2)
}