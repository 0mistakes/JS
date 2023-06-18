"use strict";

let num2 = 12345;
let str2 = String(num2);

if (str2[4] == 0) {
	document.write('+++', '<br>');
} else {
	document.write('---', '<br>');
}


let num = 2243248;
let str = String(num);

if (str[6] == 0 || str[6] == 2 || str[6] == 4 || str[6] == 6 || str[6] == 8) {
	document.write('+++');
} else {
	document.write('---');
}