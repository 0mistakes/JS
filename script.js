let elem1 = document.querySelector("#elem1");
let length = elem1.classList.length;
console.log(length);
//  2
let elem2 = document.querySelector("#elem2");
let class1 = elem2.classList;
for (let classItem of class1) {
    console.log(classItem)
}
//  3
let elem3 = document.querySelector("#elem3");
elem3.classList.add('xxx');
let class2 = elem3.classList;
console.log(class2)
//  4
let elem4 = document.querySelector("#elem4");
elem4.classList.remove('www', 'zzz');
let class3 = elem4.classList;
console.log(class3)
//   5
let elem5 = document.querySelector("#elem5");
let contains = elem5.classList.contains('ggg');
    console.log(contains);
// 6
let elem6 = document.querySelector("#elem6");
elem6.classList.toggle('zzz');
let class4 = elem6.classList;
console.log(class4)