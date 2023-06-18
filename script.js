let elem = document.querySelector('#elem');
let show = document.querySelector('#show');
let hide = document.querySelector('#hide');

hide.addEventListener('click', function() {
	elem.classList.add('hidden');
});

show.addEventListener('click', function() {
	elem.classList.remove('hidden');
});