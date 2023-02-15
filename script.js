let number = 12345;
let sum = 0;
while (number) {
  sum += number % 10;
  number = Math.floor(number / 10);
}
console.log("Сумма цифр числа 12345: " + sum);

let product = 1;
while (number) {
  product *= number % 10;
  number = Math.floor(number / 10);
}
console.log("Произведение цифр числа 12345: " + product);

let reversed = 0;
while (number) {
  reversed = reversed * 10 + number % 10;
  number = Math.floor(number / 10);
}
console.log("Число 12345 в обратном порядке: " + reversed);