;(function() {
	let div = document.querySelector('#div');
	let btn = document.querySelector('#btn');
	
	function func(num) {
		return num * num;
	}
	
	btn.addEventListener('click', function() {
		div.textContent = func(div.textContent);
	});
})();
;(function(selector1, selector2) {
	let div = document.querySelector(selector1);
	let btn = document.querySelector(selector2);
	
	function func(num) {
		return num * num;
	}
	
	btn.addEventListener('click', function() {
		div.textContent = func(div.textContent);
	});
})('#div', '#btn');