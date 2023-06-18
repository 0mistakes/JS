let now  = new Date();
let date = new Date(1988, 1, 4, 23, 
	59, 59); 
let date2 = new Date(2000, 1, 10, 23, 59, 59)

let diff = date2.getTime() - date.getTime();
console.log(diff / (1000 * 3600 * 24));
// 2
let now1  = new Date();
let date1 = new Date(2003, 12, 31, 23, 
	59, 59); 
let diff1 = now.getTime() - date1.getTime();
console.log(diff1 / (1000 * 60 * 60 * 24 * 31 ))