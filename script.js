let input1 = document.querySelector("#elem1");
let button1 = document.querySelector("#btn1");
button1.addEventListener('click', () => {
    input1.value = 'text'
})
// 2
let button2 = document.querySelector("#btn2");
let p1 = document.querySelector("#p1");
button2.addEventListener('click', () => {
    p1.textContent = input1.value 
})