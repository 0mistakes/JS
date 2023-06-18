"use strict";

let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;

if (num[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;

if (String(num[0]) == 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;

if (String(num[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам
let str = String(num);

let sum1 = str[0] + str[1] + str[2];
let sum2 = str[3] + str[4] + str[5];

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}