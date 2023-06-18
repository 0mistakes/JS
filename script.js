let num = 1;

      function func1() {
         console.log(num);
      }

      func1();   // 1


      


      let num1 = 1;

      function func2() {
         console.log(num1);
      }
 
      num1 = 2;
      func2();   // 2


      



      function func3() {
         console.log(num2);
      }

      let num2;

      num2 = 1;
      func3();   // 1

      num2 = 2;
      func3();   // 2

      num = 1;

      function func1() {
         console.log(num);
      }

      func1();   // 1


      


      num1 = 1;

      function func2() {
         console.log(num1);
      }
 
      num1 = 2;
      func2();   // 2


      



      function func3() {
         console.log(num2);
      }

      num2;

      num2 = 1;
      func3();   // 1

      num2 = 2;
      func3();   // 2

      function func() {
        let num = 5;
        return num;
     }
     
     console.log(num); //ошибка
     
     
     
     
     
     function func2() {
        let num = 5;
        return num;
     }
     
     console.log(func2()); //5

     num = 1;

function func1() {
   num = 2;
}
func1();
console.log(num); // 2






num1 = 1;

function func() {
   let num1 = 2;
}
func();
console.log(num1); // 1

let num1 = 1;

      function func1() {
         num1 = 2;
      }
      func1();

      console.log(num1); // 2


      


      

      let num2 = 1;

      function func2() {
         num2 = 2;
      }

      console.log(num2); // 1

      





      let num3 = 1;

      function func3() {
         let num3 = 2;
      }
      func3();

      console.log(num3); // 1


      




      let num4 = 1;

      function func4() {
         let num4 = 2;
      }

      console.log(num4); // 1
      func4();

      




      let num5 = 1;

      function func5() {
         num5 = 2;
      }

      console.log(num5); // 1
      func5();


      



      let num6 = 1;

      function func6() {
         num6++;
      }

      func6();
      func6();
      func6();
      console.log(num6); // 4


      


      function func7() {
         num7 = 2;
      }

      let num7 = 1;

      console.log(num7); // 1

      func7();

  
      


      function func8() {
         num8 = 2;
      }

      let num8 = 1;
      func8();
      console.log(num8); // 2

      function func1(localNum) {
        console.log(localNum);
     }
     
     func1(1); // 1
     
     
     
     
     
     
     
     function func2(localNum) {
        console.log(localNum);
     }
     
     let num2 = 1;
     func2(num2); // 1
     
     
     
     
     
     
     function func3(localNum) {
        console.log(localNum);
     }
     
     let num3 = 1;
     func3(num3); // 1
     num3 = 2;
     
     
     
     
     
     let num4 = 1;
     
     function func4(localNum) {
        console.log(localNum);
     }
     
     num4 = 2;
     func4(num4); // 2
     
     
     
     
     
     
     
     function func5(localNum) {
        localNum = 2;
     }
     
     let num5 = 1;
     func5(num5);
     console.log(num5); // 1
     
     
     
     
     
     
     
     function func6(localNum) {
        num6 = 2;
     }
     
     let num6 = 1;
     func6(num6);
     console.log(num6); // 2
     
     
     
     
     
     
     
     function func7(localNum) {
        let num7 = 2;
     }
     
     let num7 = 1;
     func7(num7);
     console.log(num7); // 1

     function func1(num1) {
      num1 = 2;
   }
   
   let num1 = 1;
   func1(num1);
   console.log(num1); // 1
   
   
   
   
   
   
   function func2() {
      num2 = 2;
   }
   
   let num2 = 1;
   func2();
   console.log(num2); // 2
   
   
   
   
   
   
   
   function func3() {
      let num3 = 2;
   }
   
   let num3 = 1;
   func3();
   console.log(num3); // 1

   function func1(obj1) {
    obj1.a = '!';
 }
 
 let obj1 = { a: 1, b: 2, c: 3 };
 func1(obj1);
 console.log(obj1); // { a: !, b: 2, c: 3 }
 
 
 
 
 
 
 
 function func2(arg2) {
    arg2 = '!';
 }
 
 let obj2 = { a: 1, b: 2, c: 3 };
 func2(obj2.a);
 console.log(obj2); // { a: 1, b: 2, c: 3 }
 
 
 
 
 
 
 function func3(obj3) {
    obj3 = '!';
 }
 
 let obj3 = { a: 1, b: 2, c: 3 };
 func3(obj3.a);
 console.log(obj3); // { a: 1, b: 2, c: 3 }
 
 
 
 
 
 
 function func4(arr4) {
    arr4.splice(1, 1);
 }
 
 let arr4 = [1, 2, 3];
 func4(arr4);
 console.log(arr4); // [1, 3]
 
 
 
 
 
 
 
 function func(arr) {
    arr.slice(1, 1);
 }
 
 let arr = [1, 2, 3];
 func(arr);
 console.log(arr); //[1, 2, 3]

 function func() {
  return '!';
}

console.log(func);

function func() {
  return console.log('Hello world!');
};


func();


console.log(func);



func = 1234;

     console.log(func);




function func1() {
  return 3;
};


let func2 = func1;




console.log(func1() + func2());





let func3 = function () {
    return 1;
 };


 


let func4 = function () {
  return 2;
};





console.log(func3() + func4())