/*- Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

//1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
//document.getElementsByTagName :
//a) отримує текст з параграфа з id "content"
// console.log(document);
const content = document.getElementById ('content');
console.log(content);

//  b) отримує текст з блоку з id "rules"
const div2 = document.getElementById ('rules');

// c) замініть текст параграфа з id 'content' на будь-який інший
content.style.color= 'green' ;

// d) замініть текст параграфа з id 'rules' на будь-який інший
div2.style.color= 'yellow';

// e) змініть кожному елементу колір фону на червоний
content.style.backgroundColor = 'red' ;
div2.style.backgroundColor= 'red';

// f) змініть кожному елементу колір тексту на синій
content.style.color = 'blue' ;
div2.style.color= 'blue';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// h) отримати всі елементи з класом fc_rules
 const fcRules = document.getElementsByClassName('fc_rules');
console.log(fcRules);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
// варіант І
for (let i = 0; i < fcRules.length; i++){
   fcRules[i].style.color='red'
}
// варіант ІІ
for ( rul of fcRules){
    rul.style.color= 'red'
}

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];
// Варіант І

for (const user of users) {
    const userDiv = document.createElement('div')
    userDiv.style.backgroundColor = 'pink';
    userDiv.style.margin = '35px';
    userDiv.style.border ='7px dashed purple'
    userDiv.innerHTML = `Name: ${user.name} <br> Age: ${user.age}`
    document.body.appendChild(userDiv);
}
// Вариант ІІ

for (let i = 0; i < users.length; i++) {
    const userDiv = document.createElement('div');
    userDiv.style.backgroundColor = 'gold';
    userDiv.style.margin = '35px';
    userDiv.style.border ='3px dotted green'
    userDiv.innerHTML = `Hello my name is ${users[i].name} <br> I am ${users[i].age} years old`;
    document.body.appendChild(userDiv);
}



// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user of users) {
    const userDiv = document.createElement('div')
    userDiv.style.backgroundColor = 'pink';
    userDiv.style.margin = '35px';
    userDiv.style.border = '7px dashed purple'
    userDiv.innerHTML = `Name: ${user.name} <br> Age: ${user.age} <div> Address:${user.address.country}</div> `
    document.body.appendChild(userDiv);
}
*/


// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

//const mainHeader = document.getElementById('main_header');
// mainHeader.style.color = 'red';

// b) робить шириниу елементу ul 400px
//const ulWidth = document.getElementsByTagName('ul')[0];
// ulWidth.style.width = '400px';

// c)  робить шириниу всіх елементів з класом linkList шириною 50%
// не працює==>
/*const linkList = document.getElementsByClassName('linkList');
 for (let i = 0; i < linkList.length; i++) {
     const elements = linkList[i];
     elements.style.width = '50%';
 }
 */
// d) отримує текст який зберігається в елементі з класом listElement2
//const listElement2 = document.querySelector('.listElement2');
//console.log(listElement2.textContent)

//e) отримує всі елементи li та змінює ім колір фону на сірий
// const liList = document.getElementsByTagName('li');
// for (let i = 0; i < liList.length; i++) {
//    const elements = liList[index];
//    elements.style.background = 'silver';
// }

// f) Щось не то ==> отримує всі елементи 'a' та додає їм клас anchor
// const aElems = document.getElementsByTagName('a');
// for (let i = 0; i < aElems.length; i++) {
//     aElems[i].classList.add ('anchor');
// }
//
//  -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const a3 = document.getElementsByTagName('a');
//  for (let i = 0; i< a3.length; i++) {
//      const element = a3[i];
//      element.classList.add(`element_${element.textContent}`);
//  }