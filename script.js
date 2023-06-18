let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
	if (event.ctrlKey) {
		console.log('нажат Ctrl' + 1);
	}
	
	if (event.altKey) {
		console.log('нажат Alt'+1);
	}
	
	if (event.shiftKey) {
		console.log('нажат Shift'+1);
	}
});