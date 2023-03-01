// - створити блок
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body
//
// створили блок
// const block = document.createElement('div');
// // додали до блока(дів) класи
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// // додали стилі
// block.style.backgroundColor = '#5f5f5f';
// block.style.color = '#333';
// block.style.fontSize = '16px';
// block.style.padding = '20px';
// block.style.marginBottom = '20px';
// // додали цей блок в body
// document.body.appendChild(block);
// // клонуємо його повністью та додаємо клон в body
// const clonedBlock = block.cloneNode(true);
// document.body.appendChild(clonedBlock);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let navItems = ['Main', 'Products', 'About us', 'Contacts'];
// const ul = document.createElement('ul');
//
// navItems.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
// });
//
// document.body.appendChild(ul);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray) {
//     let courseDiv = document.createElement('div');
//     courseDiv.innerHTML = `Course title ${course.title}  | Duration ${course.monthDuration}`;
//     document.body.appendChild(courseDiv);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// Я трошки додав коду, щоб вивести елементи массиву в html
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // створили та додали в html документ div з класом container
// const container = document.createElement('div');
// container.classList.add('container');
// document.body.appendChild(container);
//
// // запустив цикл для кожного елемента масиву coursesAndDurationArray
// for (const course of coursesAndDurationArray) {
//     // створив div та додав йому клас item
//     const item = document.createElement('div');
//     item.classList.add('item');
//
//     // створив h1, додав клас heading, та наповнив його посилаюсь на course.title
//     const heading = document.createElement('h1');
//     heading.classList.add('heading');
//     heading.textContent = course.title;
//
//     // створив p, додав до нього клас description, та наповнив його посилаючись на course.monthDuration
//     const description = document.createElement('p');
//     description.classList.add('description');
//     description.textContent = `${course.monthDuration} months`;
//
//     // додав в кожний наший div заголовок та опис
//     item.appendChild(heading);
//     item.appendChild(description);
//
//     // та додав item(дочірний елемент) до вибраного батьківскього елементу
//     container.appendChild(item);
// }

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// Проітерувати масив simpsons, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     }
// ];
// for (const simpson of simpsons) {
//     const div = document.createElement('div');
//     div.classList.add('member');
//
//     // використав дистриктеризацію з минулих уроків
//     const { name, surname, age, info, photo } = simpson;
//     div.innerHTML = `
//     <h2>${name} ${surname}</h2>
//     <p>Age: ${age}</p>
//     <p>${info}</p>
//     <img src="${photo}" alt="${name} ${surname}">
//     `;
//     document.body.appendChild(div);
// }

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// const body = document.querySelector('body');
// const text = document.createElement('p');
// const btn = document.createElement('button');
// text.setAttribute('id', 'text');
// text.textContent = 'Hi you hi';
// btn.textContent = 'click me';
// body.append(text, btn);
// btn.addEventListener('click', () => {
//     text.remove();
// });

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const body = document.querySelector('body');
// const div = document.createElement('div');
// const input = document.createElement('input');
// const btn = document.createElement('button');
// btn.textContent = 'enter text';
// div.append(input, btn);
// body.append(div);
// btn.addEventListener('click', () => {
//     if (+input.value >= 18) {
//         alert('Вітаю тебе в гачі мучі клубі');
//     } else {
//         alert('А ну геть звідси пес дюк');
//     }
//     input.value = '';
// });