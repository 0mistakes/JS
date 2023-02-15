let arr_1 = ["a", "b", "c"],
  arr_2 = [1, 2, 3],
  arr_3 = [1, 2, 3];
(arr_1[0] = 1), (arr_1[1] = 2), (arr_1[2] = 3);
document.write(`Задание 1: ${arr_1}<br>`);
for (let index = 0; index < arr_2.length; index++) {
  arr_2[index] += 3;
}
document.write(`Задание 2: ${arr_2}<br>`);
for (let index = 0; index < arr_3.length; index++) {
  arr_3[index]++;
}
document.write(`Задание 3: ${arr_3}`);