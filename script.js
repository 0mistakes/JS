"use strict";



for (let i = 10; i <= 1000; i++) {
	let str = String(i);
	console.log(str[0]);
}


for (let i = 10; i <= 1000; i++) {
	let str = String(i);
	console.log(+str[0] + (+str[1]));
}


for (let i = 10; i <= 1000; i++) {
	let str = String(i);
	if (str[0] == '1') {
		console.log(str);
	}
	
}


for (let i = 10; i <= 1000; i++) {
	let str = String(i);
	if ((+str[0] + (+str[1])) == 5) {
		console.log(str);
	}
}