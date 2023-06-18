;(function() {
	let elem = document.querySelector('#div1'); // первый див
	
	function func(num) {
		return num * num; // возведем в квадрат
	}
	
	elem.addEventListener('click', function() {
		this.textContent = func(elem.textContent);
	});
})();

;(function() {
	let elem = document.querySelector('#div2'); // второй див
	
	function func(num) {
		return num * num * num; // возведем в куб
	}
	
	elem.addEventListener('click', function() {
		this.textContent = func(elem.textContent);
	});
})();