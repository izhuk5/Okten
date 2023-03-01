// DOM
// console.log(document.body);

// ЯК ОТРИМАТИ ЕЛЕМЕНТИ?
// id
// пошук котрий не сильно полюбляють програмісти
// let ul1 = document.getElementById('list-1');
// console.log(ul1);

// class
// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollection);
// }

// tag
// let liList = document.getElementsByTagName('li');
// console.log(liList);

// let list1 = document.getElementById('list-1');
// console.log(list1);
//
// let list1LiCollection = list1.getElementsByTagName('li');
// console.log(list1LiCollection);

// тепер варіант більш цікавіший з точки синтаксичної конструкції
// console.log(document.querySelector('ul')); // знаходить тільки 1 елемент по певному css селектору
// console.log(document.querySelectorAll('ul')); // знаходить всі леементи по певному css селектору

//
// Маніпуляція DOM елементами
//
// let target = document.getElementById('target');
// console.log(target.innerText); // вивели в консоль що там
// target.innerText = 'Okten'; // змінили на тест на Okten
// target.style.background = 'orange';
// console.log(target.classList);  // повертає список всіх классів
// target.classList.add('foo'); // додасть класс
// console.log(target.classList.contains('bar')); // перевірить чи існує класс чи ні
// target.classList.toggle('foo'); // Якщо класс foo існує вже в переліку його не буде існувати ми його видаляємо, але якщо наприклад якогось asd не існувало відразу то ми його додали
// target.getAttribute(''); // дізнаємось інформацію про атрибут
// target.setAttribute(); // приймає 2 аргументи. Наприклад 1 буде 'id' - і 2 буде 'asdsad' виходить що ми значення атрибуту id змінили на новий
// console.log(target.previousElementSibling); // покаже попередній елемент
// console.log(target.nextElementSibling); // покаже наступний елемент
// console.log(target.children); // знайдемо всі його дочірні елементи HTML
// console.log(target.childNodes); // NODE
// target.innerHTML = '<b>innerHTML</b>'; // буде сприймати як html
// console.log(target.outerHTML); // покаже з чим ми працюємо


//
// Створення елементів
//
// let h2 = document.createElement('h2');
// document.body.appendChild(h2);
// h2.innerText = 'some title';

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
// let allUsersDiv = document.getElementsByClassName('users')[0];
// for (const user of users) {
//     let div = document.createElement(`div`);
//     div.classList.add('user');
//     div.innerText = user.name;
//     allUsersDiv.appendChild(div);
//
// }

//
// Рекурсія додаткове
//
// function explorer(htmlElement) {
//     console.log('current position',htmlElement);
//     let children = htmlElement.children;
//     if (htmlElement.children.length !== 0)  { // тобто вони є
//         for (const child of children) {
//             explorer(child);
//         }
//     }
// }
// explorer(document.body);











