let parent = document.querySelector('#parent');

for (let i = 1; i <= 9; i++) {
	let p = document.createElement('p');
	p.textContent = '!';
	
	parent.appendChild(p);
}