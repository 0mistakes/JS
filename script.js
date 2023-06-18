!(function () {
  console.log("!");
})(); // !







let result = (function () {
  return "!";
})();

console.log(result); // !






let result4 = function () {
  return "!";
};

console.log(result4); // код функции






let result5 = function () {
  return "!";
};

console.log(result5()); // !






let result6 =
  (function () {
     return 1;
  })() +
  (function () {
     return 2;
  })();

console.log(result6); // 3






let result7 = (function () {
  return "!";
})();

console.log(result7); // !






let result8 = (function () {
  return "!";
})();

console.log(result8); // !







let result9 = function () {
  return "!";
};

console.log(result9); // код функции






let result10 = function () {
  return "!";
};

console.log(result10()); // !






(function (num1, num2) {
  console.log(num1 + num2);
})(1, 2); // 3







(function () {
  return function () {
     return function () {
        console.log("!");
     };
  };
})()()();






(function (num1) {
  return function (num2) {
     console.log(num1 + num2);
  };
})(1)(2);






(function (num1) {
  return function (num2) {
     return function (num3) {
        console.log(num1 + num2 + num3);
     };
  };
})(1)(2)(3);





let str = "str";

(function () {
  console.log(1);
})(); // 1






let str3 = "str"

(function () {
  console.log(1);
})(); // error