// - створити функцію яка повертає найменьше число з масиву
// let arr = [1, 3, 5, 7, 9, 11, 30, 60, 99];
//
// function minNum(numbers) {
//     let min = numbers[0]; // щоб відштовхувались від самого початку массиву
//     for (const number of numbers) {
//         if(min > number) { // якщо хочемо знайти найбільше число то пишемо напваки <
//             min = number // і тут ми замінюємо значення і так по кругу
//         }
//     }
//     return min; // коли круг закінчується ми останє значення повертаємо в min
// }
// console.log(minNum(arr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let arr = [1, 3, 5, 7, 9, 11, 30, 60, 99];
//
// function sum(arr) {
//     let result = 0;
//     for (const arrElement of arr) {
//         result += arrElement;
//     }
//     return result;
// }
// console.log(sum(arr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//     let v1 = arr[index1];
//     let v2 = arr[index2];
//
//     arr[index1] = v2;
//     arr[index2] = v1;
// }

// - написати функцію яка буде шукати елемент в масиві
// function search(array, target) {
//     if (array.length === 0) {
//         return false;
//     } else if (array[0] === target) {
//         return array.length;
//     } else {
//         return search(array.slice(1), target);
//     }
// }
//
// console.log(search(arr, 35));

// Find the smallest and biggest numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers
// let arr = [10, 30, 70, 100];
// v1
// function minMax(arr) {
//     return [Math.min(...arr), Math.max(...arr)];
// }
// console.log(minMax(arr));
// v2
// let minMax = arr => [Math.min(...arr), Math.max(...arr)];
// console.log(minMax(arr));
// console.log(`${minMax(arr)[0]} - min number ${minMax(arr)[1]} - max number`);

// Рекурсія
// let arr = [11, 22, 33, [44, 55]];
// let innerArray = [];
// function flatter(array) {
//     for (const item of array) {
//         if (Array.isArray(item)) {
//             flatter(item);
//         } else {
//             innerArray.push(item);
//         }
//     }
// }
// flatter(arr);
// console.log(innerArray);

// Callback функції
// function filter(arr, callback) {
//     let mass = [];
//     for (const item of arr) {
//         if (callback(item)) {
//             mass[mass.length] = item;
//         }
//     }
//     return mass;
// }
// console.log(filter([11, 22, 33, 44, 55], function (item) {
//     return item % 2 === 0;
// }));


// const myArr = [1, 2, 3];
// const firstElement = myArr[0]; // доступ до першого елементу масиву
// console.log(firstElement);

// const myArr = [1, 2, 3];
// const [firstElement, secondElement, thirdElement] = myArr;
// console.log(firstElement);
// console.log(secondElement);
// console.log(thirdElement);

const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

btn.addEventListener('click', () => {
    text.style.display = 'none';
});

