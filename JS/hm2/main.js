// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let users = ['Alina', 'Ihor', true, false, 28, 31, 40, '8k', '4k', true];
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log(users[5]);
// console.log(users[6]);
// console.log(users[7]);
// console.log(users[8]);
// console.log(users[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
// let firstBook = {
//     title: 'Ha-ha',
//     pageCount: 322,
//     genre: 'Drama'
// };
//
// let secondBook = {
//     title: 'Lorem',
//     pageCount: 312,
//     genre: 'Fun'
// };
//
// let thirdBook = {
//     title: 'Hi-hi',
//     pageCount: 32,
//     genre: 'Drama'
// };

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
// let books = {
//     title: 'Ha-ha',
//     pageCount: 322,
//     genre: 'Drama',
//     authors: [
//         {name: 'Ihor', age: 28},
//         {name: 'Alina', age: 21}
//     ]
// };
//
// let books = {
//     title: 'Idiots',
//     pageCount: 99,
//     genre: 'Drama',
//     authors: [
//         {name: 'Ingvar', age: 22},
//         {name: 'Alex', age: 21}
//     ]
// };
//
// let books = {
//     title: 'Am I Right Sir?',
//     pageCount: 555,
//     genre: 'Drama',
//     authors: [
//         {name: 'Vasya', age: 24},
//         {name: 'Vasilisa', age: 26}
//     ]
// };

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [
//     { name: 'Ihor', userName: 'izhuk1', password: 123 },
//     { name: 'Ihor23', userName: 'izhuk2', password: 145 },
//     { name: 'Ihor23', userName: 'izhuk3', password: 234 },
//     { name: 'Ihor1', userName: 'izhuk4', password: 345 },
//     { name: 'Ihor3', userName: 'izhuk5', password: 456 },
//     { name: 'Ihor5', userName: 'izhuk6', password: 678 },
//     { name: 'Ihor6', userName: 'izhuk7', password: 321 },
//     { name: 'Ihor7', userName: 'izhuk8', password: 322 },
//     { name: 'Ihor8', userName: 'izhuk9', password: 111 },
//     { name: 'Ihor9', userName: 'izhuk10', password: 222 }
// ];
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);


// Логічні розгалуження:

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 0;
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
// const time = +prompt('Type a number pls', '')
//
// if (time > 0 && time <= 15) {
//     console.log('Перша Четверть');
// } else if (time >15 && time <= 30) {
//     console.log('Друга четверть');
// } else if (time >30 && time <= 45) {
//     console.log('Третя четчерть');
// } else if (time > 40 && time <= 59) {
//     console.log('Четверта четверть');
// } else { console.log('Десять? Девять!!') }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('Type a number pls');
// if ( day > 0 && day < 11) {
//     console.log('Перша декада');
// } else if ( day > 10 && day < 21) {
//     console.log('Друга декада');
// } else if ( day > 21 && day <= 31) {
//     console.log('Третя декада');
// } else (console.log('Шо шо??'));

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let numberOfTheWeek = +prompt('Enter a number');
// switch (numberOfTheWeek) {
//     case 1:
//         console.log('Понеділок. Вчимо JS!');
//         break;
//     case 2:
//         console.log('Вівторок. Ще більше вчимо JS та практикуємось');
//         break;
//     case 3:
//         console.log('Середа. Пів дня займаємось в спорт залі, іншу частину дня вчимо JS!');
//         break;
//     case 4:
//         console.log('Четверг. Вчимо анг мову бо так треба! Треба ж якось знати як називати змінні)');
//         break;
//     case 5:
//         console.log('Пятниця. Вчимо JS)');
//         break;
//     default:
//         console.log('Субота, Неділя - відпочинок, але можна повчити JS)')
//         break;
// }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
// let a = +prompt('Type first number', '');
// let b = +prompt('Type second number', '');
// if (a > b ) {
//     console.log('First number is bigger');
// } else if ( b > a) {
//     console.log('Second number is bigger');
// } else if ( a === b) {
//     console.log('Numbers are equal');
// } else (console.log('You should type a number!'));

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
// let x;
// if (x === false || x === null || x === undefined || x === '' || x === "" || x === 0 || x === NaN) {
//     x = "default";
// }
// console.log(x);
// або може так??
// let x = false;
// if (x === false) {
//     x = "default";
// }
// console.log(x);

let x ;
if (!x ) {
    x = "default";
}
console.log(x);

