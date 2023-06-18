"use strict";

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log('Task 1');
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

console.log('Task 2');
for (let i = 1; i < arr.length-1; i++) {
	console.log(arr[i]);
}

console.log('Task 3');
for (let i = arr.length-1; i >= 0 ; i--) {
	console.log(arr[i]);
}

console.log('Task 4');	
for (let i = 0; i <= arr.length-1; i++) {
	console.log(arr[i]);
}