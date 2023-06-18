function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
     result.push(callback(elem));
  }

  return result;
}

let result = each([1, 2, 3, 4, 5], function (num) {
  return num * 2;
});

console.log(result);






function each2(arr, callback) {
  let result = [];

  for (let elem of arr.reverse()) {
     result.push(callback(elem));
  }

  return result;
}

let result2 = each2(["a", "b", "c", "d"], function (str) {
  return str;
});

console.log(result2);







function each3(arr, callback) {
  let result = [];

  for (let elem of arr) {
     result.push(
        callback(elem.slice(0, 1).toUpperCase() + elem.slice(1))
     );
  }

  return result;
}

let result3 = each3(["hello", "world", "andrey"], function (str) {
  return str;
});

console.log(result3);






function square(num) {
  return Math.pow(num, 3);
}

let result4 = each([1, 2, 3, 4, 5], square);
console.log(result4);