let str = 'js';
console.log(str.toUpperCase());

let str2 = 'JS';
console.log(str2.toLowerCase());

let str3 = 'я учу javascript!';

let a1 = str3.substr(2, 3);
let a2 = str3.substr(6, 10);
console.log(a1, a2);


let b1 = str3.substring(2, 5);
let b2 = str3.substring(6, 16);
console.log(b1, b2);


let c1 = str3.slice(2, 5);
let c2 = str3.slice(6, 16);
console.log(c1, c2);



let str4 = 'abcde';
console.log(str4.indexOf('c'));


let str5 = 'abcde';
if (str5.indexOf('a') >= 0) {
   console.log('true')
} else {
   console.log('false')
};


let str6 = 'bcade';
if (str6.indexOf('a') == 0) {
   console.log('true')
} else {
   console.log('false')
};



let str7 = 'bcdea';
if (str7.indexOf('a') == str7.length - 1) {
   console.log('true')
} else {
   console.log('false')
};


let str8 = 'http://bcdea';
if (str8.indexOf('http://') == 0) {
   console.log('true')
} else {
   console.log('false')
};


let str9 = 'http://bcdea.html';
if (str9.lastIndexOf('.html') == str9.length - 5) {
   console.log('true')
} else {
   console.log('false')
};


let str10 = 'http://abcd.html';
if (str10.startsWith('http://')) {
   console.log('true')
} else {
   console.log('false')
};


let str11 = 'http://abcd.html';
if (str11.endsWith('.html')) {
   console.log('true')
} else {
   console.log('false')
};


let str12 = '1-2-3-4-5';
let newArr = str12.split('-');
console.log(newArr);


let str13 = '12345';
let newArr1 = str13.split('');
console.log(newArr1);


let arr = [1, 2, 3, 4, 5];
console.log(arr.join('-'))