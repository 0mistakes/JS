function setText(selector, text) {
	let elems = document.querySelectorAll(selector);
	
	for (let elem of elems) {
		elem.textContent = text;
	}
}

setText('.elem', 'text');