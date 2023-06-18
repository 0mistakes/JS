let elems = document.querySelector('#elem');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	let li = document.createElement('li');
	li.textContent = elem;
	li.addEventListener('click', function() {
		let currentValue = parseInt(this.textContent);
		this.textContent = currentValue + 1 + '!';
	});
	elems.appendChild(li);
}