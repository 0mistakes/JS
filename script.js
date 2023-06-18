function func() {
	return ['John', 'Smit', 'development', 
		'programmer', 2000]; 
}
let [name, surname, department, position, salary] = func();
console.log(surname);
console.log(name);