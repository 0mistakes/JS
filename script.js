let arr1 = [1, 2, 3, 4, 5];

         function result(arr) {
            console.log(arr.shift());
            if (arr.length != 0) {
               result(arr);
            }
         }
         result(arr1);





function getSum(arr) {

      let sum = Math.pow(arr.shift(), 2);
      if (arr.length !== 0) {
         sum += getSum(arr);
      }
      return sum;
    }
    console.log(getSum([1, 2, 3]));