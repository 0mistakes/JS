let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let timerId;

start.addEventListener('click', function() {
	let i = 0;
	
	timerId = setInterval(function() {
		console.log('1')
	}, 100);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});