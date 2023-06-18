let elem = document.querySelector('#elem');
let start = document.querySelector('#start');

start.addEventListener('click', function() {
	setInterval(function(self) {
		console.log(self.value);
	}, 1000, this);
});