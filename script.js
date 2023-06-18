let parent = document.querySelector('#elem');
let li = document.createElement('li');
let li1 = document.createElement('li');

li.innerHTML = 'end';
li1.innerHTML = 'start';

parent.append(li);
parent.prepend(li1);