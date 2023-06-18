function test() {
  let num1 = 1;
  let num2 = 2;

  return function () {
     return num1 + num2;
  };
}

let func = test();
console.log(func()); // 3





function test2() {
  let num1 = 1;
  let num2 = 2;

  return function () {
     return num1 + num2;
  };
}

console.log(test2()()); // 3




function test3() {
  let num1 = 1;

  return function () {
     return num1 + num2;
  };
}

let num2 = 2;
let func3 = test3();
console.log(func3()); // 3





function test4() {
  let num = 1;

  return function () {
     return num;
  };
}

let num = 2;
let func4 = test4();
console.log(func4()); // 1