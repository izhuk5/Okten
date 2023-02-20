// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// const word1 = 'hello';
// const word2 = 'lorem ipsum';
// const word3 = 'javascript is cool';
// //
// console.log("Length of 'Hello' is - ", word1.length );
// console.log("Length of 'Lorem ipsum' is - ", word2.length );
// console.log("Length of 'Javascript is cool' is - ", word3.length );

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
//const randomText = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
// v.1
// const upper = randomText.map(element => {
//    return element.toUpperCase();
// });
//
// v.2
// function upperCaseArray(arr) {
//     function upperCaseItem(element) {
//         return element.toUpperCase();
//     }
//     const upper = randomText.map(upperCaseItem);
//     return upper;
// }
//
// v.3
// const word1 = randomText[0].toUpperCase();
// const word2 = randomText[1].toUpperCase();
// const word3 = randomText[2].toUpperCase();
// console.log(word1, '-', word2, '-', word3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// const randomText = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// const word1 = randomText[0].toLowerCase();
// const word2 = randomText[1].toLowerCase();
// const word3 = randomText[2].toLowerCase();
// console.log(word1, '-', word2, '-', word3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let dirtyStr = ' dirty string   ';
// console.log(dirtyStr.replaceAll(' ', ''));

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . За допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// const num = [10,8,-7,55,987,-1011,0,1050,0];
// // v.1
// let filteredNumbers = num.map(value => {
//    return value.toString();
// });
// console.log(filteredNumbers);
// v.2
// console.log(num.map(number => (number + '')));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3];
// //
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         console.log(array.sort((first, second) => first - second));
//     } else if (direction === 'descending') {
//         console.log(array.sort((first, second) => second - first));
//     } else {
//         console.log('Error');
//     }
// }
// //
// sortNums(nums, 'descending');












// 1:36 - функції масивів
// 2:50 - concat
// 7:10 - toUpperCase, toLowerCase
// 8:20 - startWith - чи починається ... з набору символів. Якщо буде починатись з ... то поверне true, ні false.
// 9:30 - endsWith - аналогічно з startWith
// 12:10 - substring - буду вичавлювати якийсь сегмент стріги. Приймає 2 аргументи
// 15:50 - indexOf - заходить індекс
// 19:18 - replaceAll - два агрументи, перший який символ потрібно заміняти, другий на що потрібно заміняти
// 24:40 - chartAt - показує в нашій стрінзі який символ знаходиться по індексу
// 25:10 - split - розподіляє елементи масиву по ...

// 37:38 - методи масивів
// 39:32 - push - додати елемент в кінець масивів
// 40:19 - pop - видаляє з кінця. Елемент котрий pop вирізав він поверне
// 41:54 - unshift - що ви хочте додати на початок - початок це це [0]
// 42:52 - shift - видаляє з початку також повертає те що він видалив як pop
// 43:47 - splice - приймає до 3 аргументів. 1 - з якого починаємо , 2 - яким закінчуємо, 3 - на що замінюємо але не на всіх елементів
// 48:30 - slice - схожий на substring, якщо нічого сюди не передаємо то воно нарізає нам елементи. Наприклад в нас є arr = [11, 22, 33, 44, 55]; якщо ми пропишемо arr.slice(1,4) - результат виведення буде індексів з 1 по 4 не включно тобто з 1 - 3
// 49:50 - concat можемо сконкатувати 2 масиви. Додає в кінець масиву. Якщо порівняти з push, то push додає лише 1 елемент массиву
// 51:20 - reverse - повернути новий масив який буде у зворотньому напрямку
// 53:08 - includes -  дозволяє перевірити певну сиквенцію символів в будь якій позиціїї. Працює що з стрінгой що з масивами

// 54:27 - поговоримо про callback
// Callback - це просто функція.
// 55:51: forEach - це заміна циклу. Воно буду застосовувати ту функцію яка в агрументі forEach зазначена до кожного елемента нашого масиву послідовно
// 1:04:25 - filter - щось фільтрує, також приймає callback. Повертає true або false
// 1:08:00 - map - також використовую callback
// 1:11:36 - find - приймає callback, тестує наш обєкт. Знайде перший обьєкт в якого наприклад age === 31, або ту умову яку ви поставите.
// 1:22:18 - every - теж callback, повертає булеве значення. Якщо кожен з масиву задовільняю подібній умові.
// 1:15:50 - sort -
// 1:29:00 - reduce - він з одного массиву по пачках може розштовхати



