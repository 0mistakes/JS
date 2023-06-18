let elem1 = document.querySelector("#elem1");
let value = elem1.getAttribute("value");
console.log(value);
//  2
let elem2 = document.querySelector("#elem2");
let class1 = elem2.getAttribute("class");
console.log(class1);
//  3
let elem3 = document.querySelector("#elem3");
elem3.setAttribute("value", "!!!");
let value3 = elem3.getAttribute("value");
console.log(value3);
//  4
let elem4 = document.querySelector("#elem4");
elem4.setAttribute("class", "valid");
let value4 = elem4.getAttribute("class");
console.log(value4);
//  5
let elem5 = document.querySelector("#elem5");
elem5.removeAttribute('value');
//  6
let elem6 = document.querySelector("#elem6");
console.log(elem6.hasAttribute('value'));