let table = document.querySelector('#table');

for (let i = 0; i < 3; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 3; i++) {
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}