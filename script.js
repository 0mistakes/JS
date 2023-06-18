function cub(x) {
  return Math.pow(x, 3)
};

let res = cub(3);
console.log(res)





function cor(a) {
  return Math.sqrt(arguments)
};

let result = cor(3) + cor(4);
console.log(result)

function func(num) {
  return num;

  let res = num ** 2;
  return res;
}

console.log(func(3));  
//выведет 3



function func(num) {
  if (num <= 0) {
     return Math.abs(num);
  } else {
     return num ** 2;
  }
}

console.log(func(10));// 100
console.log(func(-5));// 5



function func(num) {
  if (num <= 0) {
     return Math.abs(num); 
  }

  return num ** 2; 
}

console.log(func(10)); //100
console.log(func(-5)); // 5  

function func(num) {
  let sum = 0;
  
  for (let i = 1; i <= num; i++) {
     sum += i;
     return sum;
  }
  }
  
  console.log(func(5)); 
  //выведет  1

  let i = 0;

function num(x) {
   for (;; i++) {
      x = x / 2;
      if (x <= 10) {
         return i;
      } 
   }
}

console.log(num(100));

function func(num1, num2) {

  if (num1 > 0 && num2 > 0) {
     return num1 * num2;
  } else {
     return num1 - num2;
  }
}

console.log(func(3, 4));

let arr1 = [2, 4, 6];

function func1(arr) {

   for (let elem of arr) {
      if (elem % 2 != 0) {
         return false;
      }
   };

   return true;
};

if (func1(arr1)) {
   console.log('Все числа четные');
} else {
   console.log('Есть нечетные числа')
}





let num = 4663;

function func2(number) {

   let arrNum = String(number).split('')

   for (let elem of arrNum) {
      if (elem % 2 != 0) {
         return false;
      }
   };

   return true;
};

if (func2(num)) {
   console.log('Все цифры четные');
} else {
   console.log('Есть нечетные цифры')
}




let arr3 = [2, 3, 4, 4, 7];

function func3(arr) {
   for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] == arr[i+1]) {
         return true;
      } else {
         continue;
      }
   };
   return false;
}

if (func3(arr3)) {
   console.log('Есть два одинаковых элемента подряд');
} else {
   console.log('Нет двух одинаковых элемента подряд')
}

let x = 2, y = 2

function func(a, b) {
   return a == b;
};

console.log(func(x, y));




x = 3;
y = 2;

function func2(a, b) {
   return a != b;
}

console.log(func2(x, y));




x = 3;
y = 3;

function func3(a, b) {
   return a + b >= 10;
}

console.log(func3(x, y));




let number = -2;

function func4(num) {
   return num >= 0
}

console.log(func4(number));

let arr1 = [1, 2, 3, 4];

      function calcArr(arr) {

         let res = 0;

         for (let elem of arr) {
            res += elem;
         };

         res = res / arr.length

         return res;
      };

      console.log(calcArr(arr1))

   
      



      let arr2 = [1, 2, 3, 4];
      let arr3 = [5, 6, 7, 8];

      function sum(arr) {
         let sum = 0;
         for (let elem of arr) {
            sum += elem
         };
         return sum;
      };

      function num1(arr1, arr2) {
         let res1 = sum(arr1)
         let res2 = sum(arr2)
         return res1 / res2;
      };

      console.log(num1(arr2, arr3));


      

     
      let arr6 = [1, 2, 3, 4, 5, 6]

      function num2(arr) {
         let res = 1;

         for (let elem of arr) {
            res *= elem;
         }

         return res;
      };

      console.log(num2(arr6));

      let arr1 = [1, 2, 3, 4];

      function calcArr(arr) {

         let res = 0;

         for (let elem of arr) {
            res += elem;
         };

         res = res / arr.length

         return res;
      };

      console.log(calcArr(arr1))

   
      



      let arr2 = [1, 2, 3, 4];
      let arr3 = [5, 6, 7, 8];

      function sum(arr) {
         let sum = 0;
         for (let elem of arr) {
            sum += elem
         };
         return sum;
      };

      function num1(arr1, arr2) {
         let res1 = sum(arr1)
         let res2 = sum(arr2)
         return res1 / res2;
      };

      console.log(num1(arr2, arr3));


      

     
      let arr6 = [1, 2, 3, 4, 5, 6]

      function num2(arr) {
         let res = 1;

         for (let elem of arr) {
            res *= elem;
         }

         return res;
      };

      console.log(num2(arr6));