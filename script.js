let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value);
	
	function child() {
		console.log(this.value); 
	}
	child();
}