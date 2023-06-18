function test1() {
  let num = 1;

  return function () {
     console.log(num);
     num++;
  };
}

let func = test1();
func();
func();





function test3() {
  let num = 10;

  return function () {
     console.log(num);
     num--;
  };
}

let func3 = test3();

func3();
func3();





function test2() {
  let num = 10;

  return function () {
     if (num >= 0) {
        console.log(num);
        num--;
     } else {
        console.log("Конец");
     }
  };
}

let func2 = test2();

func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();





function func4() {
  let num = 0;

  return function () {
     console.log(num);
     num++;
  };
}

func4()(); // 0
func4()(); // 0
func4()(); // 0





function func5() {
  let num = 0;

  return function () {
     console.log(num);
     num++;
  };
}

let test5 = func5;

test5()(); // 0
test5()(); // 0
test5()(); // 0





let counter = 0;

function test55() {
  return function () {
     console.log(counter);
     counter++;
  };
}

let func55 = test55;

let func56 = func55();
let func57 = func55();

func56(); // 0
func57(); // 1
func56(); // 2
func57(); // 3





function test66() {
  let counter = 0;

  return function () {
     return function () {
        console.log(counter);
        counter++;
     };
  };
}

let func66 = test66()();

let func67 = func66;
let func68 = func66;

func67(); // 0
func68(); // 1
func67(); // 2
func68(); 






function test80() {
  let counter = 0;

  return function () {
     return function () {
        console.log(counter);
        counter++;
     };
  };
}

let func80 = test80();

let func81 = func80();
let func82 = func80();

func81(); // 0
func82(); // 1
func81(); // 2
func82(); // 3