"use strict";


let res = 0;

for (let i = 2; i <= 100; i++) {
	if (i % 2 == 0) {
		res += i;
	}
}
console.log(res);

res = 0;

for (let i = 1; i <= 99; i++) {
	if (i % 2 == 1) {
		res += i;
	}
}
console.log(res);

res = 1;

for (let i = 1; i <= 20; i++) {
	res *= i;
}
console.log(res);