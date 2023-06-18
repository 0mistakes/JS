let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, 
	num4, num5) { 
return num1 + num2 + num3 + num4 
		+ num5; 
}
console.log(func(...arr));
// 2
function func2(n1, n2, n3, n4, n5, n6, n7, n8) {
return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}
console.log(func2(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]));
// 3
let arr3 = [1, 2, 3, 4, 5];
let min = Math.min(...arr3);
console.log(min)