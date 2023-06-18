"use strict";


let arr = [1, 2, 0, 4, 5];

for (let elem of arr) {
	if (elem == 0) {
		break;
	}
	console.log(elem);
}


arr = [14, 21, 10, 4, -2, 5];
let res = 0;
for (let elem of arr) {
	if (elem < 0) {
		break;
	}
	res += elem;
}
console.log(res);


arr = [14, 21, 32, 10, 3, -2, 5];
res = 0;
for (let elem of arr) {
	if (elem == 3) {
		break;
	}
	res += 1;
}
console.log(res);


arr = [14, 21, 32, 10, 3, -2, 5];
res = 0;
let count = 0;
for (let i = 1; res <=100; i++) {
	res += i;
	count++;
}
console.log(count);