"use strict";

let r_circle = Number(prompt("Enter radius of circle: ")),
  Pi = Math.PI;
document.write(`Задание 1: ${Pi * r_circle ** 2}`);
let a_square = Number(prompt("Enter length of square: "));
document.write(`<br>Задание 2: ${a_square ** 2}`);
let l_rect = Number(prompt("Enter length of rectangle: ")),
  w_rect = Number(prompt("Enter width of rectangle: "));
document.write(`<br>Задание 3: ${w_rect * l_rect}`);
document.write(`<br>Задание 4: ${2 * (l_rect + w_rect)}`);
let tc = Number(prompt("Enter temperature in Celcius: "));
document.write(`<br>Задание 5: ${tc * (9 / 5) + 32}`);
let fc = Number(prompt("Enter temperature in Fahrenheit: "));
document.write(`<br>Задание 6: ${(fc - 32) / (9 / 5)}`);