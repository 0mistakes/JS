let result1 = every([1, 2, 3, 4, 5], (elem) => {
  if (elem > 0) {
     return true;
  } else {
     return false;
  }
});







let result2 = every([1, 2, 3, 4, 5], (elem, index) => {
  if (elem * index > 10) {
     return true;
  } else {
     return false;
  }
});






let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let result3 = each(arr, (elem, index) => {
  if (elem * index > 10) {
     return true;
  } else {
     return false;
  }
});