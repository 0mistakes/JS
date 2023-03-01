let num = Math.floor(Math.random() * 21);
console.log(`num = ${num}`);
if (num > 0 && num < 5) {
  console.log(`0 < num < 5`);
} else if (num > 10 && num <= 20) {
  console.log(`10 < num < 20`);
}
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
console.log(`num1 = ${num1}`);
console.log(`num2 = ${num2}`);
if (num1 <= 1 && num2 >= 3) {
  console.log(`num1 <= 1 && num2 >= 3`);
}