;(function() {
	let str = 'переменная модуля';
	
	function func() {
		alert('функция модуля');
	}
	
	window.func = func;
})();

func(); 