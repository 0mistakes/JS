let tds = document.querySelectorAll('#table td');

let color = 'color1';
for (let td of tds) {
	td.addEventListener('click', function() {
		if (color == 'color1') {
			color = 'color2'
		} else {
			color = 'color1'
		}
		
		this.classList.add(color);
	});
}