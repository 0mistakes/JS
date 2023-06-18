let p1 = document.querySelector("#p1");
let button1 = document.querySelector("#btn1");
let messege = p1.textContent;
button1.addEventListener("click", () => {
    console.log(messege);
});
//  2
let p2 = document.querySelector("#p2");
let button2 = document.querySelector("#btn2");
button2.addEventListener("click", () => {
    p2.textContent = "Hello world";
});
//  3
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let button3 = document.querySelector("#btn3");
button3.addEventListener("click", () => {
    console.log(Number(p3.textContent) + Number(p4.textContent) )
});
//  4
let p5 = document.querySelector("#p5");
let p6 = document.querySelector("#p6");
let p7 = document.querySelector("#p7");
let result = document.querySelector("#result1")
let button4 = document.querySelector("#btn4");
button4.addEventListener("click", () => {
    result.textContent = Number(p5.textContent) + Number(p6.textContent) + Number(p7.textContent)
})
//  5
let p8 = document.querySelector("#p8");
let button5 = document.querySelector("#btn5");
button5.addEventListener('click', () => {
    p8.textContent = Number(p8.textContent) + 1
})
//  6
let p9 = document.querySelector("#p9");
let button6 = document.querySelector("#btn6");
button6.addEventListener('click', () => {
    p9.textContent += '!'
})