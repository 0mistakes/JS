let elem = document.querySelector('#elem');
let p = document.querySelector('p')

elem.addEventListener('change', function() {
    p.textContent = this.value
});