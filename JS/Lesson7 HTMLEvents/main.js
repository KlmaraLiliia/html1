/*
//1.- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл
// елемент с id="text".
document.getElementById('btn')
 .onclick=()=>{
     document.getElementById('text').hidden=true;
 }
// через інпут
document.getElementById('hider')
    .onclick=function(){
    document.getElementById('text').hidden=true;
};
console.log('hello');

//2. - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
const btnOff=document.getElementById('btn')
btnOff.onclick=()=>{
    btnOff.style.display='none'
}

//3.- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//    При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
//    та повідомити про це користувача
const age =document.getElementById('age');
const ageBtn = document.getElementById('ageBtn');
ageBtn.onclick = (ev=>{
    const message = (+age.value<18)?'You are so small':'Hello, you are adult'
    confirm(message)
});

- 4.Створіть меню, яке розгортається/згортається при клику

- Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    Вивести список коментарів в документ, кожний в своєму блоці.
    Додайте кожному коментарю по кнопці для згортання його body.

- Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація
з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
    Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

- Створити функцію, яка генерує таблицю.
    Перший аргумент визначає кількість строк.
    Другий параметр визначає кількість ячейок в кожній строці.
    Третій параметр визначає елемент в який потрібно таблицю додати.

- Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.


    ______________________________________________________________________________________________________________________________________________________
РОБОТА В АУДИТОРІЇ
______________________________________________________________________________________________________________________________________________________

- Сворити масив нецензцрних слів.
    Сворити інпут текстового типу.
    Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
    Перевірку робити при натисканні на кнопку

- Сворити масив нецензцрних слів.
    Сворити інпут текстового типу.
    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    Кинути алерт з попередженням у випадку якщо містить.
    Перевірку робити при натисканні на кнопку



-- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
    При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

-- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
2й - залишає старших 29 років включно
3й - залишає тих в кого місто Київ
Дані виводить в документ
*/
//const form =document.getElementById('form');
//const age = document.getElementById('age');
//age.onclick = (ev=>{
//    const message = (+form.value<18)?'You are so small':'Hello, you are adult'
 //   confirm(message)
//});





