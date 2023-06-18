"use strict";

//////
let arr1 = [1, 2, 3, 4, 5];

   for (let item in arr1) {
      arr1[item] = arr1[item] ** 2;
   };
   console.log(arr1)

//////
let arr2 = [1, 2, 3, 4, 5];

for (let item in arr2) {
      arr2[item] -= 1
};
console.log(arr2)

//////
let arr3 = [1, 2, 3, 4, 5];

for (let item in arr3) {
   arr3[item] += 10
};
console.log(arr3)