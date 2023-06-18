let obj = {
  1: {
     1: 11,
     2: 12,
     3: 13,
  },
  2: {
     1: 21,
     2: 22,
     3: 23,
  },
  3: {
     1: 24,
     2: 25,
     3: 26,
  },
};

let result = 0;

for (let key in obj) {
  let obj3 = obj[key];
  for (let obj1 in obj3) {
     result += obj3[obj1]
  };
};

console.log(result)

let obj2 = {
  1: {
     1: {
        1: 111,
        2: 112,
        3: 113,
     },
     2: {
        1: 121,
        2: 122,
        3: 123,
     },
  },
  2: {
     1: {
        1: 211,
        2: 212,
        3: 213,
     },
     2: {
        1: 221,
        2: 222,
        3: 223,
     },
  },
  3: {
     1: {
        1: 311,
        2: 312,
        3: 313,
     },
     2: {
        1: 321,
        2: 322,
        3: 323,
     },
  },
};

let result1 = 0;

for (let key in obj2) {
  let obj_3 = obj2[key];

  for (let key2 in obj_3) {
     let obj_2 = obj_3[key2];

     for (let key3 in obj_2) {
        result1 += obj_2[key3]
     }
  }
};

console.log(result1)