forEach('.elem', function(elem, index) {
	console.log(elem);  // выведет элемент
	console.log(index); // выведет порядковый номер элемента
});
forEach('.elem', function(elem, index) {
	elem.textContent = elem.textContent + index;
});
function forEach(selector, func) {
	let elems = document.querySelectorAll(selector);
	
	for (let i = 0; i < elems.length; i++) {
		func(elems[i], i);
	}
}