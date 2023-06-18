let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr  = ['a', ...arr1, 'b', 'c', 
	...arr2]; 
console.log(arr);
// 2
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];

let arr5  = ['a', ...arr3, ...arr3, 'b', 
	'c']; 
console.log(arr5);
// 3
let arr6 = [1, 2, 3];
let arr7 = [...arr6, 4, 5, 6];

let arr8  = ['a', 'b', 'c', ...arr7];
console.log(arr8);