"use strict";

if (1) {
    console.log('Ok!');
} else {
    console.log('Error!');
}


// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('many');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!'): console.log('Error!');

let num = 50;

// while (num < 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        // break;
        continue;
    }
    console.log(i)
}

// switch (num) {
//     case 49:
//         console.log('Неверное');
//         break;
//     case 100:
//         console.log('НЕА');
//         break;
//     case 50:
//         console.log('В точку');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

function first() {
    //Do something
    setTimeout(() => {
        console.log(1);
    }, 500);

}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`я учу ${lang}`);
    callback();
}

function done() {
    console.log('z прошел этот урок');
}

learnJS('javaScript', done);


const options = {
    name: 'test',
    widht: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options).length);
console.log(options.color);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

const arr = [1, 23, 32, 16, 28];
arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
    return a - b;
}
console.log(arr.reve());
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
// arr.push(10);

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }


const obj = {
    a: 1,
    b: 2
};

const copy = obj;

function copyy(mailObj) {
    let objCopy = {};

    let key;
    for (key in mailObj) {
        objCopy[key] = mailObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumers = copyy(numbers);

newNumers.a = 10;
newNumers.c.x = 10;

console.log(numbers);
console.log(newNumers);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sdds';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const arrayNew = [...array];

const q = {
    one: 1,
    two: 2
};

const newObjj = {...q };

console.log(arrayNew);
console.log(newObjj);