let button1 = document.querySelector("#btn1");
button1.addEventListener("dblclick", func1);
function func1() {
    console.log("dblclick1");
}
//  2
let button2 = document.querySelector("#btn2");
button2.addEventListener("mouseover", () => {
    console.log("mouseover2");
});
//  3
let button3 = document.querySelector("#btn3");
button3.addEventListener("mouseout", () => {
    console.log("mouseout3");
});
//  4
let button4 = document.querySelector("#btn4");
button4.addEventListener("mouseover", () => {
    console.log("mouseover4");
});
button4.addEventListener("mouseout", () => {
    console.log("mouseout4");
});