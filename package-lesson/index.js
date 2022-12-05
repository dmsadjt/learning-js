import _ from 'lodash';

const myArray = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

console.log(`without lodash: ${sum}`);

const lodashArray = [1, 2, 3, 4];
const lum = _.sum(lodashArray);

console.log(`with lodash: ${lum}`);
