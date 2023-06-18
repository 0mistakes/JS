let i = 10;

let timerId = setInterval(function() {
	console.log(--i);
	
	if (i >= 10) {
		clearInterval(timerId);
	}
}, 1000);