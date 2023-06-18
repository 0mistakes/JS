let p = document.createElement('p');
p.innerHTML = '!!!';

let target = document.querySelector('#elem');
target.insertAdjacentElement('afterBegin', p);