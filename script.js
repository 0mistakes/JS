let elem   = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function(event) {
	elem.remove();
	event.preventDefault();
});