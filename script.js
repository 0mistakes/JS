let elem = document.querySelector('input');

elem.addEventListener('keypress', function(event) {
	console.log(event.key);
	console.log(event.code);
});