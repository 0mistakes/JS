"use strict";

let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	document.write(key, "<br>");
}

let obj1 = {x: 1, y: 2, z: 3};
for (let key in obj1) {
	document.write(obj1[key]);
}