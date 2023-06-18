let months = {
  'ru': [
     'январь',
     'февраль',
     'март',
     'апрель',
     'май',
     'июнь',
     'июль',
     'август',
     'сентябрь',
     'октябрь',
     'ноябрь',
     'декабрь',
  ],
  'en': [
     'january',
     'february',
     'march',
     'april',
     'may',
     'june',
     'july',
     'august',
     'september',
     'october',
     'november',
     'december',
  ],
};

let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11

console.log(months[lang][month])

let affairs = {
  '2018': {
     11: {
        29: ['дело111', 'дело112', 'дело113'],
        30: ['дело121', 'дело122', 'дело123'],
     },
     12: {
        30: ['дело211', 'дело212', 'дело213'],
        31: ['дело221', 'дело222', 'дело223'],
     },
  },
  '2019': {
     12: {
        29: ['дело311', 'дело312', 'дело313'],
        30: ['дело321', 'дело322', 'дело323'],
        31: ['дело331', 'дело332', 'дело333'],
     }
  },
};

let year = '2018';
let month1 = 11;
let day = 29;

console.log(affairs[year][month1][day])

let obj = {
  key1: {
     key2: '12',
     key3: '13',
  },
  key2: {
     key4: '24',
     key5: '25',
  },
}

let key1 = 'key1';
let key2 = 'key2';
let keyItem = 'key4'

console.log(obj[key2][keyItem]);

let obj1 = {
  key1: {
     key2: '12',
     key3: '13',
  },
  key2: {
     key4: '24',
     key5: '25',
  },
}

let key12 = 'key1';
let key22 = 'key2';

console.log(obj[key22].key4);

let obj3 = {
  key1: {
     key2: '12',
     key3: '13',
  },
  key2: {
     key4: '24',
     key5: '25',
  },
}

let key13 = 'key1';
let key23 = 'key2';

console.log(obj[key23].key4);

let obj4 = {
  key1: {
     key2: '12',
     key3: '13',
  },
  key2: {
     key4: '24',
     key5: '25',
  },
}

let key14 = 'key2';
console.log(obj[key14].key4);