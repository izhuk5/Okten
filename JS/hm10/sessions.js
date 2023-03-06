// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію.

const sessionsArr = JSON.parse(localStorage.getItem('arr') || []);
const wrap = document.querySelector('#wrap');
for (const item of sessionsArr) {
    let div = document.createElement('div');
    div.textContent = item;
    wrap.append(div);
}