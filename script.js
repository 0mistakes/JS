function test1() {
  let num = 1;

  function func() {
     console.log(num);
  }

  func();
}

test1(); // 1




function test2() {
  let num = 1;

  function func() {
     console.log(num);
  }
}

test2(); // ничего





function test3() {
  let num = 1;

  function func() {
     console.log(num);
  }

  func();
}
// ничего



function test4() {
  let num;

  function func() {
     console.log(num);
  }

  num = 1;
  func();

  num = 2;
  func();
}

test4(); // 1   2





function test5(num1, num2) {
  function func() {
     console.log(num1 + num2);
  }

  func();
}

test5(1, 2); // 3





function test6(num1, num2) {
  function func() {
     console.log(num1 + num2);
  }

  num1 = 2;
  func();
}

test6(1, 2); // 4





function test7(num) {
  function func(localNum) {
     console.log(localNum);
  }

  func(num);
}

test7(1); // 1