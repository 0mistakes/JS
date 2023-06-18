function func(...nums) {
  let sum = 0;
  let count = 0
for (let num of nums) {
  sum += num;
  count++;
}

  return sum / count;
}
let result = func(1, 2, 3, 4, 1, 1);
console.log(result);