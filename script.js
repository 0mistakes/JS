"use strict";

let test1 = true;
let test2 = true;
if (test1 && test2) { 
	console.log('+++');
} else {
	console.log('---');
}
// 2
let test3 = true;
let test4 = true;
if (test3 && test4 !== 
	true) { 
	console.log('+++');
} else {
	console.log('---');
}
// 3
let test5 = true;
let test6 = true;
if (!test5 && !test6) { 
	console.log('+++');
} else {
	console.log('---');
}
// 7
let test7 = true;
let test8 = true;
let test9 = true;
if (test7 || test8 && test9) { 
	console.log('+++');
} else {
	console.log('---');
}