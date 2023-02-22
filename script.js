"use strict";

let test1 = '3';
let test2 = '3';
		
if (test1 == test2) {
	console.log('+++');
} else {
	console.log('---');   true
}
test1 = '3';
test2 = '3';
		
if (test1 === test2) {
	console.log('+++');
} else {
	console.log('---');   true
}
test1 = 3;
test2 = '3';
		
if (test1 == test2) {
	console.log('+++');
} else {
	console.log('---'); // true
}
test1 = 3;
test2 = '3';
		
if (test1 === test2) {
	console.log('+++');
} else {
	console.log('---');   false
}
test1 = 3;
test2 = 3;
		
if (test1 === test2) {
	console.log('+++');
} else {
	console.log('---');   true
} 