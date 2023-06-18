function func(num = 5) {
  console.log(num * num);
}
func(2); // 4
func(3); // 9
func(); // 25




function func2(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
};
func2(2, 3);// 5
func2(3); // 3
func2(); // 0