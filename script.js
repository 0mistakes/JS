let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');

for (let item of items) {
	item.addEventListener('click', function() {
		this.innerHTML = this.innerHTML + '!';
	});
}

button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.innerHTML = 'item';
	
	item.addEventListener('click', function() { // обработчик клика
		this.innerHTML = this.innerHTML + '!';
	});
	
	list.appendChild(item);
});