let users = [
	{
		name: 'name1',
		surname: 'surname1',
		patronymic: 'patronymic1'
	},
	{
		name: 'name2',
		surname: 'surname2',
		patronymic: 'patronymic2'
	},
	{
		name: 'name3',
		surname: 'surname3',
		patronymic: 'patronymic3'
	},
];

let table = document.getElementById('table');

for (let user of users) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = user.surname;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = user.patronymic;
	tr.appendChild(td3);
	
	table.appendChild(tr);
}