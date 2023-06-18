let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.textContent;

input.addEventListener('blur', function() {
	elem.textContent = this.value;
});