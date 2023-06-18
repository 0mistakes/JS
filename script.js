function func(num1, num2) {
  function square(num) {
     return Math.pow(num, 2);
  }

  function cub(num) {
     return Math.pow(num, 3);
  }

  return square(num1) + cub(num2);
};

console.log(func(2, 3));