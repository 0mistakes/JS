let parent = document.querySelector('#parent');

let p = document.createElement('p');
p.textContent = '!';

p.addEventListener('click', function() {
	console.log(this.textContent); 
});

parent.appendChild(p);