let elem = document.querySelector('#elem');

setInterval(function() {
	elem.value = Number(elem.value) + 1;
}, 1000);