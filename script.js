let str1 = 'Hello world';
   let res1 = str1.slice(0) + str1.slice(-1).toUpperCase();

   console.log(res1)

   let str2 = 'Hello world';
   let res2 = str2.slice(0, 2).toUpperCase() + str2.slice(2);

   console.log(res2)

   let str3 = 'London';
   let res3 = str2.slice(0, 1).toLowerCase() + str2.slice(1);

   console.log(res3)

   let str4 = 'word1 word2 word3';

   console.log(str4)

   let word = str4.split(' ');

   for (let i = 0; i <= word.length - 1; i++) {
      word[i] = word[i].slice(0, 1).toUpperCase() + word[i].slice(1);
   };

   str4 = word.join(' ');

   console.log(str4)

   let str5 = 'var_test_text';

   console.log(str5)

   let word1 = str5.split('_');

   for (let i = 0; i <= word1.length - 1; i++) {
      word1[i] = word1[i].slice(0, 1).toUpperCase() + word1[i].slice(1);
   };

   str5 = word1.join('');

   console.log(str5)

   let newStr = str5.slice(0, 1).toLowerCase() + str5.slice(1);

   console.log(newStr)

   let str7 = 'Hello World!';
   let result = str7.split('').reverse().join('');

   console.log(result); 