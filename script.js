let input1 = document.querySelector("#elem1");
let button1 = document.querySelector("#btn1");
button1.addEventListener('click', () => {
    console.log(input1.type)
})
//  2
let button2 = document.querySelector("#btn2");
button2.addEventListener('click', () => {
    input1.type = "submit"
    console.log(input1.type)
})