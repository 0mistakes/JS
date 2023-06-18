let arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
];
console.log(arr[3][2])
console.log(arr[1][1])
console.log(arr[2][0])
console.log(arr[0][0]) 



let arr1 = [
  [1, 2], [3, 4], [5, 6]
];
let sum1 = 0
let sum2 = 0
for (let i = 0; i <= arr1.length - 1; i++) {
  for (let k = 0; k <= arr1[i].length - 1; k++) {
     sum2 += arr1[i][k]
  }
}
console.log(sum2)



let arr2 = [
  [
     [1, 2],
     [3, 4],
  ],
  [
     [5, 6],
     [7, 8],
  ],
];
let sum3 = 0
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
     for (let k = 0; k < arr2[i][j].length; k++) {
        sum3 += arr2[i][j][k];
     };
  };
};
console.log(sum3)



let arr3 = [
  [1, 2, 3, [4, 5, [6, 7]]],
  [8, [9, 10]]];
let res0 = arr3[0][0] + arr3[0][1] + arr3[0][2] + arr3[0][3][0] + arr3[0][3][1] + arr3[0][3][2][0] + arr3[0][3][2][1]
let res1 = arr3[1][0] + arr3[1][1][0] + arr3[1][1][1]
let result = res0 + res1
console.log(result)