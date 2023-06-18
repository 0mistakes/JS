let parent = document.querySelector('#parent');
let elem = parent.querySelector('.elem');

let clone = elem.cloneNode(true);
parent.appendChild(clone);