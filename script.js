let arr = ["a", "b", "c", "d", "e"];
document.write(
  `Длина до удаления: ${arr.length}<br>Массив до удаления: ${arr}`
);
delete arr[1], delete arr[3];
document.write(
  `Длина после удаления: ${arr.length}<br>Массив после удаления: ${arr}`
);