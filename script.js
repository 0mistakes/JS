let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
	event.preventDefault('/');
	this.elem = this.elem + ' (' + this.href + ')';
	console.log('Вы не можете перейти по этой ссылке!');
});