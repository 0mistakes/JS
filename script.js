let parent = document.querySelector('#parent');

for (let i = 1; i <= 9; i++) {
	let p = document.createElement('p');
	p.textContent = '!';
	
	// Навешиваем обработчик клика:
	p.addEventListener('click', function() {
		console.log(this.textContent);
	});
	
	parent.appendChild(p);
}