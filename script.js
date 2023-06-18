let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

function func() {
	console.log(this.value); 
}
func.call(elem1,elem2,elem3);