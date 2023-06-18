"use strict";

let arr = [2, 5, 9, 15, 1, 4];

console.log('Task 1');
for (let elem of arr) {
	if (elem > 3 && elem < 10) {
		console.log(elem);
	}
}

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

console.log('Task 2');
for (let elem in obj) {
	if (obj[elem] % 2 == 1) {
		console.log(elem);
	}
}