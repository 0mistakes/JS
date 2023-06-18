let elem = document.getElementById('elem');
elem.textContent = 'text'
//   2
let elems = document.getElementsByTagName('li');
for (let elem of elems) {
    elem.textContent += '!'
}
//   3
let elems2 = document.getElementsByClassName('www');
for (let elem of elems2) {
    elem.innerHTML = '!!!';
}