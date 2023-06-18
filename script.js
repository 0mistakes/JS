let elems = document.querySelectorAll(".elem1");
let btn = document.querySelector('#button1')

btn.addEventListener('click', () => {
    console.log(elems)
    for (let elem of elems) {
        elem.textContent = 'text';
    }
})