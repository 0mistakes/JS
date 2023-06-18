"use strict";

let str = 'abcde';

if (str[0] == 'a') {
	document.write('yes', '<br>');
} else {
	document.write('no', '<br>');
}

let str1 = 'abx';

if (str1[2] == 'x') {
	document.write('yes', '<br>');
} else {
	document.write('no', '<br>');
}

let str2 = 'abc';

if (str2[0] == 'a' || str2[0] == 'b') {
	document.write('yes', '<br>');
} else {
	document.write('no', '<br>');
}