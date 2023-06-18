let elem = document.querySelector('#elem');
elem.dataset.num = 123;

console.log(elem.childNodes[0]);
console.log(elem.childNodes[1]);
console.log(elem.childNodes[2]);

for (let node of elem.childNodes) {
    console.log(node);
}