let tds = document.querySelectorAll('#table td');

for (let td of tds) {
	td.addEventListener('click', function() {
		this.classList.add('active');
	});
}