"use strict";

console.log('Task 1');
let i = 1;

while (i <= 100) {
	console.log(i);
	i++;
}

console.log('Task 2');
let y = 11;

while (y <= 33) {
	console.log(y);
	y++;
}

console.log('Task 3');
let num = 23;
let count = 0;

while (num <= 1000) {
	num *= 3;
	count++;
}
console.log('Iter count', + count);
console.log(num);