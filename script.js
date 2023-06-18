"use strict";

let lang = 'ru';

switch (lang) {
    case 1 (lang == 'ru'):
	document.write('рус');
    break;
    case 2 (lang == 'en'):
	document.write('анг');
    break;
    case 3 (lang == 'de'):
	document.write('нем');
    break;
    default:
	document.write('язык не поддерживается');
    break;
}