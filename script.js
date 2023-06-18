"use strict";

//////
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
   if (elem == 'c') {
	  flag = true;
	  break;
   }
}

if (flag === true) {
   console.log('+++');
} else {
   console.log('---');
}

//////
let num = 4;
let flag2 = true;
let i = 2;

while (i < num) {
   if (num % i == 0) {
	  flag2 = !flag2;
	  break;

   } else {
	  i += 1;
   };
};

if (flag2) {
   console.log(`Число ${num} является простым`)
} else {
   console.log(`Число ${num} не является простым`)
}