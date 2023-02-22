"use strict";

let test = {x: 1, y: 2, z: 3};
console.log(test);
//object
test = {x: 1, y: 2, z: 3};
console.log(test.x);
//primitive
test = [1, 2, 3];
console.log(test);
//object
test = [1, 2, 3];
console.log(test[1]);
//primitive
test1 = [1, 2, 3];
test2 = 1;
console.log(test1);
//object
test1 = [1, 2, 3];
test2 = 1;
console.log(test1[test2]);
//primitive 