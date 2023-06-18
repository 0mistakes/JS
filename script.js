forEach('.elem', function(elem) {
	elem.textContent = elem.textContent ** 2;
});

function forEach(selector, func) {
	let elems = document.querySelectorAll(selector);
	
	for (let elem of elems) {
		func(elem);
	}
}