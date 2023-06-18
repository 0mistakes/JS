let day = new Date(2023, 4, 2, 23);
let now = new Date(2023, 4, 3, 15);
let diff1 = now - day;
console.log(diff1 / 1000);
// 2
let day1 = new Date(2023, 4, 3, 23);
let now1 = new Date(2023, 4, 3, 15);
let diff2 = day1 - now1;
console.log(diff2 / 1000);
// 3
let day2 = new Date(2023, 12, 31, 23);
let now2 = new Date(2023, 4, 3, 15);
let diff3 = day2 - now2;
console.log(diff3 / 1000 / 60 / 60 / 24);
// 4
function isLeap() {
    if (new Date().getFullYear() == 12) {
        return true;
    } else {
        return false;
    }
}
    if (isLeap == true) {
        console.log("Високосный");
    } else {
        console.log("Обычный");
}