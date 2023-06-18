"use strict";

let month = 5;
if (month >= 1 && month < 3) {
document.write('It is winter now.', '<br>');
} else if (month >= 3 && month < 6) {
document.write('It is spring now.', '<br>')
} else if (month >= 6 && month < 9) {
document.write('It is summer now.', '<br>')
} else if (month >= 9 && month <= 11) {
document.write('It is fall now.', '<br>');
} else if (month === 12) {
document.write('It is winter now.', '<br>');
} else 
document.write('Error!');



let str = 'abcde';
if (str[0] === 'a') {
document.write('да', '<br>');
} else 
document.write('нет', '<br>');



let num = 12345;
let str1 = String(num);

if (str1[0] == 1 || str1[0] == 2 || str1[0] == 3) {
document.write('да', '<br>');
} else 
document.write('нет', '<br>');



let num1 = 123;
let str2 = String(num1);

document.write(+str2[0] + +str2[1] + +str2[2], '<br>');



let num2 = 123033; // берем в кавычки, чтобы обращаться к цифрам
let str3 = String(num2);

let sum1 = +str3[0] + +str3[1] + +str3[2];
let sum2 = +str3[3] + +str3[4] + +str3[5];

if (sum1 == sum2) {
	document.write('суммы равны');
} else {
	document.write('суммы не равны');
}