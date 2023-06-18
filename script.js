let l = document.querySelector(".link");
let btn = document.querySelector("#btn")

btn.addEventListener("click", func1)
function func1() {
    l.textContent += l.href
    btn.removeEventListener('click', func1);
}
//  2
let btn2 = document.querySelector("#btn1");
btn2.addEventListener("click", func2);

function func2() {
    if (this.textContent < 10) {
        this.textContent = Number(this.textContent) + 1
    } else {
        this.removeEventListener("click", func2);
    }
}