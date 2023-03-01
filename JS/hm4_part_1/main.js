// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function formulaRectangle(a, b) {
//     return a * b;
// }
// console.log(formulaRectangle(30, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const PI = 3.14;
// function formulaCircle(radius) {
//     return PI * Math.pow(radius, 2);
// }
// console.log(formulaCircle(30));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayPrinter(arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// arrayPrinter([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function printParagraph(text) {
//     document.write(`'Here is your massage' + ${text}`);
// }
// printParagraph('Hello Children');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function liCreator(txt) {
//     document.write(`<ul>`);
//         document.write(`<li>${txt}</li>`);
//         document.write(`<li>${txt}</li>`);
//         document.write(`<li>${txt}</li>`);
//     document.write(`</ul>`);
// }
// liCreator('Russian voennhuy ship idi nahuy');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liCreator2(txt, counter) {
//     document.write(`<ul>`);
//         for (let i = 0; i < counter; i++) {
//             document.write(`<li>${txt}</li>`);
//         }
//     document.write(`</ul>`);
// }
// liCreator2('Hi', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function listCreator(arr) {
//     document.write(`<ul>`);
//         for (const item of arr) {
//             document.write(`<li>${item}</li>`);
//         }
//     document.write(`</ul>`);
// }
// listCreator([12, 22, true, false, 'asdasd']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function objBlockCreator(objects) {
//     for (const item of objects) {
//         document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`);
//     }
// }

// - створити функцію яка повертає найменьше число з масиву
// function minNum(numbers) {
//     let min = numbers[0];
//     for (const number of numbers) {
//         if( min > number) {
//             min = number
//         }
//     }
//     return min;
// }

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(numbers) {
//     let basket = 0;
//     for (const number of numbers) {
//         basket = basket + numbers; // поточне значення basket + його число, basket += number; більш коротка версія
//     }
//     return basket;
// }









// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(uah, currencies, exitCurrency) {
//     for (const item of currencies) {
//         if (item.currency === exitCurrency) {
//             return uah / item.value;
//         }
//     }
// }
// exchange(
//     10000,
//     [
//         {currency:'USD',value:40},
//         {currency:'EUR',value:42},
//         {currency: 'GBP', value: 43}
//     ],
//     'USD'
// )




