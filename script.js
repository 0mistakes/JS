let elems = document.querySelectorAll('li');
let sum = 0;

for (let elem of elems) {
    let text = +elem.textContent;
    if (text % 6 === 0) {
        sum += text;
    }
}
console.log(sum)