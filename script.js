let elems = document.querySelectorAll('#parent p');

for (let elem of elems) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'remove';
	elem.appendChild(remove);
	
	remove.addEventListener('click', function(event) {
		elem.remove();
		event.preventDefault();
	});
}