"use strict";

let num = 3;
		
if (num > 5 && num < 10 || num == 20) {
	console.log('+++');
} else {
	console.log('---');
}


num = 3;
		
if (num > 5 || num > 0 && num < 3) {
	console.log('+++');
} else {
	console.log('---');
}


num = 3;
		
if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {
	console.log('+++');
} else {
	console.log('---');
} 