;(function(root, type, amount) {
	let parent = document.querySelector(root);
	
	for (let i = 1; i <= amount; i++) {
		let elem = document.createElement(type);
		parent.append(elem);
	}
})('#parent', 'p', 5);

let config = {
	root:  '#parent',
	type:  'p',
	amount: 5
}