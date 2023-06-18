"use strict";


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	let result;
	
	if (elem % 2 == 0) {
		result = elem * elem;
	} else if (elem % 3 == 0) {
		result = elem * elem * elem;
	} else {
		continue;
	}
	
	console.log(result);
}