let date = new Date();
function addZero(num) {
    if (num >= 0 && num <= 9) {
        return "0" + num;
    } else {
        return num;
    }
}

console.log(
    addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' +
    addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear());