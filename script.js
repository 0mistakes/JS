"use strict";

let a = 2 * (3 - 1);
let b = 6 - 2;
document.write(a == b, '<br>')

let c = 5 * (7 - 4);
let d = 1 + 2 + 7;
document.write(c > d, '<br>')

let e = 2 ** 4;
let f = 4 ** 2;
document.write(e != f)


"use strict";

let ok = confirm('Вам есть 18 лет?');

if (ok) {
	document.write('текст для взрослых 0_0');
} else {
	document.write('доступ запрещен');
}