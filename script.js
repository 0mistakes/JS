let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
for (let i of arr) {
    if (String(i)[0] == '1' || String(i)[0] == '2') {
        sum = sum + Number(i);
    }
}
console.log(sum);