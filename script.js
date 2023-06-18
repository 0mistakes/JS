let obj = {
  key1: {
     key1: 1,
     key2: 2,
     key3: 3,
  },
  key2: {
     key1: 4,
     key2: 5,
     key3: 6,
  },
  key3: {
     key1: 7,
     key2: 8,
     key3: 9,
  },
};

let sum1 = obj.key1.key1 + obj.key1.key2 + obj.key1.key3;
let sum2 = obj.key2.key1 + obj.key2.key2 + obj.key2.key3;
let sum3 = obj.key3.key1 + obj.key3.key2 + obj.key3.key3;

console.log(sum1 + sum2 + sum3)

let obj1 = {
  1: {
     1: 'a1',
     2: 'a2',
     3: 'a3',
  },
  2: {
     1: 'b1',
     2: 'b2',
     3: 'b3',
  },
  3: {
     1: 'c1',
     2: 'c2',
     3: 'c3',
  },
};

console.log(obj1[2][2]);
console.log(obj1[3][1]);

let obj2 = {
  key1: {
     a: 1,
     b: 2,
     c: {
        d: 3,
        e: 4,
     }, 
     f: 5,
  },
  key2: {
     g: 6,
     h: 7,
  },
};

let sum11 = obj2.key1.a + obj2.key1.b + obj2.key1.c.d + obj2.key1.c.e + + obj2.key1.f;
let sum22 = obj2.key2.g + obj2.key2.h;


console.log(sum11 + sum22);