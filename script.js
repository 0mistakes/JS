let elem = document.querySelector('#elem');
let p = document.querySelector('#p')

elem.addEventListener('blur', () => {
    p.textContent = elem.textContent
})