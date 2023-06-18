"use strict";

//////
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0;

for (let i of arr) {
   if (i == 3) {
	  count += 1
   } else {
	  continue;
   };
};

console.log(count);

//////
let arr1 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count1 = 0;

for (let i of arr1) {
   if (i == 3 || i == 2) {
	  count1 += 1
   } else {
	  continue;
   };
};

console.log(count1);