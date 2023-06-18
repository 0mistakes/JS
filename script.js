let div = document.querySelector('div');

div.addEventListener('click', function(event) {
	if (event.target.matches('div')) {
		console.log('клик именно по диву');
	}
	if (event.target.matches('p')) {
		console.log('клик именно по абзацу');
	}
});