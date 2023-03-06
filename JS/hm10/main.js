// ЗАВДАННЯ 1
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// const form = document.forms.creator;
// form.onsubmit = function (e) {
//     e.preventDefault();
//
//     const wrapper = document.createElement('div');
//     const name = document.createElement('div');
//     const surname = document.createElement('div');
//     const age = document.createElement('div');
//
//     name.innerText = `Name: ${this.name.value}`;
//     surname.innerText = `Surname: ${this.surname.value}`;
//     age.innerText = `Age: ${this.age.value}`;
//
//     wrapper.classList.add('wrapper', 'item');
//     wrapper.append(name, surname, age);
//     document.body.appendChild(wrapper);
// };

// ЗАВДАННЯ 2
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// const numberBox = document.querySelector('.number-box');
// let counter = localStorage.getItem('counter') || 0; // якщо counter не існує то ми його створили та присоїли відразу 0
// counter++;
// localStorage.setItem('counter', counter.toString());
// numberBox.textContent = counter;

// ЗАВДАННЯ 3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію.
// якщо нема arr ми його створили
// let newSessions = JSON.parse(localStorage.getItem('arr')) || [];
// newSessions.push(new Date());
// localStorage.setItem('arr', JSON.stringify(newSessions));
// let usersJson = localStorage.getItem('arr');
// let users = JSON.parse(usersJson);
// console.log(users);
//
// document.querySelector('#clear').addEventListener('click', () => localStorage.clear());

// ЗАВДАННЯ 4
// Зробити масив на 100 об'єктів та дві кнопки prev next.
// при завантажені сторінки з'являються перші 10 об'єктів.
// при натисканні next виводяться настпні 10 об'єктів.
// при натисканні prev виводяться попередні 10 об'єктів.
//
// const array = [];
// const createArray = (count) => {
//     for (let i = 0; i < count; i++) {
//         array.push({name: `Ihor - ${i+1}`});
//     }
//     return array;
// };
// const myArray = createArray(100);
// const goodsContainer = document.querySelector('#goods-container');
// const prevBtn = document.querySelector('#prev');
// const nextBtn = document.querySelector('#next');
// let startIndex = 0;
//
// function showElements(startIndex) {
//     // кожний раз при кліку по стрілках буде очищати контейнер
//     goodsContainer.innerHTML = '';
//     // починає з індексу startIndex і закінчує що на 10 більше
//     for (let i = startIndex; i < startIndex + 10; i++) {
//         const div = document.createElement('div');
//         div.innerText = myArray[i].name;
//         goodsContainer.appendChild(div);
//     }
// }
//
// showElements(startIndex);
//
// prevBtn.addEventListener('click', () => {
//    startIndex -= 10;
//    showElements(startIndex);
// });
//
// nextBtn.addEventListener('click', () => {
//    startIndex += 10;
//    showElements(startIndex);
// });

// ЗАВДАННЯ 5
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// ЗАВДАННЯ 6
// За допомогою local storage роблять корзини
// document.forms // можна достукатись до всіх форм, або за допомогою атрибута наприклад document.forms.creator

// **** КОНСПЕКТ ****
// 18:40 - data - один з головних
// 39:00 - events
// 1:05:40 - local storage
// 1:22:56 - де ми можемо заюзати local storage
//
// localStorage.setItem('key1', 'value1'); // метод який дозволяє придумати якийсь ключ, і за цим ключем зафіксувати якесь значення
// localStorage.setItem('user', JSON.stringify({name: 'vasya'})) // перетворили цей обєкт в стрінгу
// console.log(localStorage.getItem('key1')); // можемо дістати інформацію з local storage
// let userJSON = localStorage.getItem('user'); // дістаємо юзера
// let user = JSON.parse(userJSON); // отримали нормального юзера
// local storage - приймає тільки стрінги!
// local storage - окремий для кожного окремного сайту
// local storage - можна зберегти від 2-12 мегабайтів
//
//                   ключ    значення
// localStorage.setItem('key', 'value1');
// console.log(localStorage.getItem('key')); // дістали значення key
// localStorage.setItem('user', JSON.stringify({name: 'vasya'}));
// let userJSON = localStorage.getItem('user'); // дістали юзера але він буде json
// let user = JSON.parse(userJSON); // отримали нормального юзера
// console.log(user);