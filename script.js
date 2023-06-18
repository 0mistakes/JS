let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length - 1; i++) {
    console.log(arr1[i+1]);
}



let arr2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2.length - 1; i++) {
    console.log(arr2[i] + arr2[i+1]);
}



let arr3 = [1, 2, 3, 4, 5];
for (let i = 2; i <= arr3.length - 1; i++) {
    console.log( arr3[i-1] + " " + arr3[i-2]);
}



let arr4 = [1, 2, 3, 4, 5];
for (let i = 2; i <= arr4.length - 1; i++) {
    console.log( arr4[i] + arr4[i-1] + arr4[i-2]);
}



let arr5 = [1, 2, 3, 4, 5];
for (let i = 1; i < arr5.length - 1; i++) {
    console.log(arr5[i-1] + arr5[i] + arr5[i+1]);
}