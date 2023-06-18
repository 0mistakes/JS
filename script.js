let parent = document.querySelector('#parent');

for (let i = 1; i <= 9; i++) {
	let p = document.createElement('p');
	p.textContent = i;
	
	p.addEventListener('click', function() {
		this.remove();
	});
	
	parent.appendChild(p);
}