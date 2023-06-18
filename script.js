"use strict";

//////
let arr1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   let arr2 = [1, 2, 3, 4, 5, 6, 7];
   let newObj1 = {};

   for (let i = 0; i <= 6; i++) {
      let key = arr2[i];
      let value = arr1[i]

      newObj1[key] = value
   };

console.log(newObj1);

//////
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj2 = {};

for (let key in obj) {

   if (obj[key] % 2 == 0) {

	  let newKey = key;
	  let value = obj[key];
	  newObj2[newKey] = value;

   } else {
	  continue
   };
};

console.log(newObj2);

//////
let obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj3 = {};

for (let key in obj1) {

   let newKey = obj1[key];
   let newValue = key;

   newObj3[newKey] = newValue;
};
console.log(obj1);
console.log(newObj3);