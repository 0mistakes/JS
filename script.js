"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	child(this); 
	
	function child(param) {
		console.log(param.value); 
	}
}