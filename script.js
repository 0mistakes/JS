let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');

list.addEventListener('click', function(event) {
	let li = event.target.closest('li');
	
	if (li) {
		li.innerHTML = li.innerHTML + '!';
	}
});