let arr1 = [1, 2, 3];
   arr1.push(4, 5, 6);

   console.log(arr1);

   let arr2 = [1, 2, 3];
   arr2.unshift(4, 5, 6);

   console.log(arr2);

   let arr3 = [1, 2, 3];
   console.log(arr3.shift());

   let arr4 = [1, 2, 3];
   console.log(arr4.pop());

   let arr5 = [1, 2, 3, 4, 5];
   arr5 = arr5.slice(0, 3);

   console.log(arr5);

   let arr6 = [1, 2, 3, 4, 5];
   let newVar = arr6.slice(3);

   console.log(newVar);

   let arr7 = [1, 2, 3, 4, 5];
   arr7.splice(1, 2)

   console.log(arr7)

   let arr8 = [1, 2, 3, 4, 5];

   arr8.splice(3, 0, 'a', 'b', 'c');

   console.log(arr8);

   let arr9 = [1, 2, 3, 4, 5];

   arr9.splice(1, 0, 'a', 'b');
   arr9.splice(6, 0, 'c');
   arr9.splice(8, 0, 'e');

   console.log(arr9);
   
   let arr10 = [1, 2, 3, 4, 5];

   console.log(arr10.indexOf(3));

   let arr11 = [1, 2, 3, 4, 5];

   if (arr11.indexOf(3) >= 0) {
      console.log(true);
   } else {
      console.log(false);
};