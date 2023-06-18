for (let i = 1; i <= 100; i++) {
  console.log(i)
};


for (let i = 100; i >= 1; i--) {
  console.log(i)
};


for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
     console.log(i)
  } else {
     continue;
  };
};


let newArr = new Array();
for (i = 1; i <= 10; i++) {
  newArr.push('x');
};
console.log(newArr)


let newArr1 = new Array();
for (i = 1; i <= 10; i++) {
  newArr1.push(i);
};
console.log(newArr1)


let arr3 = [1, 3, -2, 11, 12, 2, -10, 8, 9];
for (let elem of arr3) {
  if (elem > 0 && elem < 10) {
     console.log(elem);
  } else {
     continue;
  };
};


let arr4 = [1, 3, -2, 5, 12, 2, -10, 8, 9];
let flag = false;
for (let elem of arr4) {
  if (elem == 5) {
     flag = !flag;
     break;
  } else {
     continue;
  };
};
console.log(flag);


let arr5 = [1, 3, -2, 5, 12, 2, -10, 8, 9];
let res = 0;
for (let elem of arr5) {
  res += elem;
};
console.log(res);


let arr6 = [1, 3, -2, 5, 12, 2, -10, 8, 9];
let res6 = 0;
for (let elem of arr6) {
  res6 += elem ** 2;
};
console.log(res6);


let arr7 = [1, 2, 3, 4, 5, 6]
res7 = 0;
for (let elem of arr7) {
  res7 += elem;
};
res7 = res7 / arr7.length;
console.log(res7)


let x = 6;
let result = 1;
for (let i = 1; i <= x; i++) {
  result *= i;
};
console.log(result)


let arr8 = [];
for (let i = 10; i >= 1; i--) {
  arr8.push(i);
};
console.log(arr8)


let arr9 = [1, 2, 3, -4, -6, 2, -9];
let sum = 0;
for (let elem of arr9) {
  if (elem >= 0) {
     sum += elem;
  } else {
     continue;
  };
};
console.log(sum)


let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
  if (String(elem)[0] == 1 || String(elem)[0] == 2 || String(elem)[0] == 5) {
     console.log(elem);
  } else {
     continue;
  };
};


let arr1 = [10, 20, 30, 50, 235, 3000];
for (let i = arr1.length - 1; i >= 0; i--) {
  console.log(arr1[i])
}