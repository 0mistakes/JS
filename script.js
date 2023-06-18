function setText(elems, text) {
	for (let elem of elems) {
		elem.textContent = text;
	}
}
let elems = document.querySelectorAll('.elem');
setText(elems, 'text65');