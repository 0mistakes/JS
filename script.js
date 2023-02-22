"use strict";

let obj = {x: 1, y: 2, z: 3};
delete obj.x;

document.write('x' in obj); //false