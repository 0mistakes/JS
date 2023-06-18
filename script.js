let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(() => console.log(this.value), 1000);
});