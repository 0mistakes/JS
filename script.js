;(function() {
	function square(num) {
		return num ** 2;
	}
	function cube(num) {
		return num ** 3;
	}
	function avg(arr) {
		return sum(arr, 1) / arr.length;
	}
	function digitsSum(num) {
		return sum(String(num).split(''));
	}
	
	// вспомогательная функция
	function sum(arr) {
		let res = 0;
		
		for (let elem of arr) {
			res += +elem;
		}
		
		return res;
	}
	
	window.math = {square, cube, avg, digitsSum};
})();