let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function(self) {
		console.log(self.value);
	}, 1000, this);
});