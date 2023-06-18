function func1([name, surname, department, position, salary]) {
  console.log(name);
  console.log(department);
}
func1(["John", "Smit", "development", "programmer", 2000]);
// 2
function func2([name, surname, ...info]) {
  console.log(name);
  console.log(surname);
  console.log(info);
}
func2(["John", "Smit", "development", "programmer", 2000]);
// 3
function func3([name, surname, department, position = "мид"]) {
  console.log(name);
  console.log(position);
  console.log(department);
}
func3(["встань", "Smit", "да"]);
// 4
function func(department, user, surname, year, month, day) {
  console.log(department);
  console.log(user);
  console.log(surname);
  console.log(year);
  console.log(month);
  console.log(day);
}
func("development", ...["John", "Smit"], ...[2018, 12, 31]);
// 5
function func5({ color: c, width: w, height: h }) {
  console.log(c);
  console.log(w);
  console.log(h);
}
func5({ color: "red", width: 400, height: 500 });
// 6
function func6({ color: c = 'black', width: w, height: h }) {
  console.log(c);
  console.log(w);
  console.log(h);
}
func6({width: 400, height: 500 });