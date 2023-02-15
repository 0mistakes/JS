
"use strict";

let today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
console.log(yyyy);
let date = { year: yyyy, month: mm, day: dd };
document.write(`${date.year}-${date.month}-${date.day}`);