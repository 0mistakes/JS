let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setTimeout(function() {
		alert('!');
	}, 3000);
});