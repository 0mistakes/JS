let p1 = document.querySelector("#p1");
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    console.log(p1.innerHTML);
});
//  2
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    p1.innerHTML = `<b>${p1.textContent}</b>`
});