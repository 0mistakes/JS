let div1 = document.querySelector("#elem1");
let button1 = document.querySelector("#btn1");
button1.addEventListener("click", () => {
    console.log(div1.className);
});
//  2
let div2 = document.querySelector("#elem2");
let button2 = document.querySelector("#btn2");
button2.addEventListener("click", () => {
    div2.className = "main";
});
//  3
let div3 = document.querySelector("#elem3");
let button3 = document.querySelector("#btn3");
button3.addEventListener("click", () => {
let arr = [div3.classList[0], div3.classList[1], div3.classList[2]]
    console.log(arr)
});