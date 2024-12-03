'use strict';

const objectsArray = [
    { id: 1, name: 'Ann' },
    { id: 12, name: 'No' },
    { id: 1, name: 'Ann' },
];

const arrays = objectsArray.map((obj) => Object.values(obj));

const uniqueArray = Array.from(
    new Set(arrays.map((subArray) => subArray.join(',')))
).map((str) => str.split(','));

console.log(uniqueArray)