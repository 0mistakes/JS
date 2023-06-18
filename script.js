let table = document.querySelector('#table');

let tr = document.createElement('tr');

for (let i = 1; i <= 3; i++) {
	let td = document.createElement('td');
	tr.appendChild(td);
}

table.appendChild(tr);

let trs = document.querySelectorAll('#table tr');

for (let tr of trs) {
	let td = document.createElement('td');
	tr.appendChild(td);
}