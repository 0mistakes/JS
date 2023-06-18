let newArr = [];
for (let i = 0; i <= 2; i++) {
   newArr[i] = [];
   for (let k = 1; k <= 5; k++) {
      newArr[i].push(k)
   };
};
console.log(newArr);


let newArr1 = [];
for (let i = 0; i <= 2; i++) {
   newArr1[i] = [];
   for (let k = 1; k <= 4; k++) {
      newArr1[i].push('x')
   };
}
console.log(newArr1);


let newArr2 = [];
for (let i = 0; i <= 2; i++) {
   newArr2[i] = [];
   for (let k = 0; k <= 1; k++) {
      newArr2[i][k] = [];
      for (let j = 1; j <= 5; j++) {
         newArr2[i][k].push(j)
      }
   };
};
console.log(newArr2)