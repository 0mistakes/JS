let newobj = {
  func1: function () { return 1 },
  func2: function () { return 2 },
  func3: function () { return 3 },
};

let sum = newobj.func1() + newobj.func2() + newobj.func3();
console.log(sum);





for (let elem in newobj) {
  console.log(newobj[elem]())
};