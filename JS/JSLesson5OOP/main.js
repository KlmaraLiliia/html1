/*
- 1)  Створити функцію конструктор для об'єкту який описує теги

Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru
Таким чином описати теги
 -a
 -div
 -h1
 -span
 -input
 -form
 -option
 -select
 Приклад результату
// {
//  titleOfTag: 'area',
// action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// attrs: [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// {some props and values},{some props and values },{some props and values }];
//}
*/
/*
 function TagConstructor(name,action,attrs) {
     this.name = name;
     this.action = action;
     this.attrs = attrs;
 }
 let aTag = new TagConstructor ('a',
     'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
     [{ name: 'href', desc: 'Задает адрес документа, на который следует перейти.'}]);
console.log(aTag);

 let divTag = new TagConstructor('div',
     'Элемент <div> блочный елемент,предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
      [{name: 'align', desc:'Задает выравнивание содержимого тега'},
            {name: 'title', desc:'Добавляет всплывающую подсказку к содержимому'}]);
console.log(divTag);

 let h1Tag = new TagConstructor('h1',
    'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня',
    [{name:'align',desc: 'Определяет выравнивание заголовка'}]);
console.log(h1Tag);

 let spanTag = new TagConstructor('span',
     'с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль',
     [{name:'class', desc:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'},
           {name:'hidden', desc:'Скрывает содержимое элемента от просмотра'},
           {name:'style', desc:'Применяется для определения стиля элемента с помощью правил CSS'}]);
console.log(spanTag);

 let inputTag = new TagConstructor('input',
     'Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
     [{name:'alt', desc:'Альтернативный текст для кнопки с изображением'},
            {name:'border',desc:'Толщина рамки вокруг изображения'},
            {name:'checked', desc:'Предварительно активированный переключатель или флажок'},
            {name:'disabled', desc:'Блокирует доступ и изменение элемента'}]);
console.log(inputTag);

let formTag = new TagConstructor('form',
    'Тег <form> устанавливает форму на веб-странице',
    [{name:'action', desc:'Адрес программы или документа, который обрабатывает данные формы'},
          {name:'method', desc:'Метод протокола HTTP'},
          {name:'target', desc:'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат'}]);
console.log(formTag);

let optionTag = new TagConstructor('option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    [{name:'disabled',desc:'Заблокировать для доступа элемент списка'},
          {name:'label', desc:'Указание метки пункта списка'},
          {name:'selected', desc:'Заранее устанавливает определенный пункт списка выделенным'}]);
console.log(optionTag);

let selectTag = new TagConstructor('select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
    [{name:'accesskey', desc:'Позволяет перейти к списку с помощью некоторого сочетания клавиш'},
        {name:'autofocus', desc:'Устанавливает, что список получает фокус после загрузки страницы'},
        {name:'disabled', desc:'Блокирует доступ и изменение элемента'}]);
console.log(selectTag);
*/


/*
-2)  Створити класс  для об'єкту який описує теги
Властивості
 -назва тегу
 - опис його дій
 - масив з атрибутами (2-3 атрибути максимум)
 Кожен атрибут описати як окремий який буде містити
 -назву атрибуту
 -опис дії атрибуту
 інформацію брати з htmlbook.ru

 Таким чином описати теги
 -a
 -div
 -h1
 -span
 -input
 -form
 -option
 -select
 Приклад результату
   {
        titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        attrs: [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {some props and values},{some props and values },{some props and values }]
}
 */

/*
class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
};
let aTag = new Tag ('a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [{ name: 'href', desc: 'Задает адрес документа, на который следует перейти.'}]);
console.log(aTag);

let divTag = new Tag('div',
    'Элемент <div> блочный елемент,предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    [{name: 'align', desc:'Задает выравнивание содержимого тега'},
        {name: 'title', desc:'Добавляет всплывающую подсказку к содержимому'}]);
console.log(divTag);

let h1Tag = new Tag('h1',
    'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня',
    [{name:'align',desc: 'Определяет выравнивание заголовка'}]);
console.log(h1Tag);

let spanTag = new Tag('span',
    'с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль',
    [{name:'class', desc:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'},
        {name:'hidden', desc:'Скрывает содержимое элемента от просмотра'},
        {name:'style', desc:'Применяется для определения стиля элемента с помощью правил CSS'}]);
console.log(spanTag);

let inputTag = new Tag('input',
    'Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
    [{name:'alt', desc:'Альтернативный текст для кнопки с изображением'},
        {name:'border',desc:'Толщина рамки вокруг изображения'},
        {name:'checked', desc:'Предварительно активированный переключатель или флажок'},
        {name:'disabled', desc:'Блокирует доступ и изменение элемента'}]);
console.log(inputTag);

let formTag = new Tag('form',
    'Тег <form> устанавливает форму на веб-странице',
    [{name:'action', desc:'Адрес программы или документа, который обрабатывает данные формы'},
        {name:'method', desc:'Метод протокола HTTP'},
        {name:'target', desc:'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат'}]);
console.log(formTag);

let optionTag = new Tag('option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    [{name:'disabled',desc:'Заблокировать для доступа элемент списка'},
        {name:'label', desc:'Указание метки пункта списка'},
        {name:'selected', desc:'Заранее устанавливает определенный пункт списка выделенным'}]);
console.log(optionTag);

let selectTag = new Tag('select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
    [{name:'accesskey', desc:'Позволяет перейти к списку с помощью некоторого сочетания клавиш'},
        {name:'autofocus', desc:'Устанавливает, что список получает фокус после загрузки страницы'},
        {name:'disabled', desc:'Блокирует доступ и изменение элемента'}]);
console.log(selectTag);
*/

/*3) -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
 додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
*/
/*
let car = {
    model: 'Peugeot 206CC',
    year: 2005,
    maxSpeed: 240,
    engine: 1.6,
    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    },
    info: function () {
        console.log(this);
    },
    increaseMaxSpeed: function (speed) {
        this.maxSpeed = speed;
    },
    changeYear: function (newValue) {
        this.year = newValue;
    },
    addDriver: function(driver) {
         this.driver = driver;
    }
};
car.drive();
car.info();
car.increaseMaxSpeed(290);
console.log(car);
car.changeYear(2021);
console.log(car);
car.addDriver({name: "string", age: 'number',height: 'number1',canToDrive:true});
console.log(car);
 */
//================================
//==========================================
/*
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
 максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
 -- info () - яка виводить всю інформацію про автомобіль
 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 -- changeYear (newValue) - змінює рік випуску на значення newValue
 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
*/
/*
 class Car{
     constructor(brend, model, year, maxSpeed, egine) {
         this.brend = brend
         this.model = model
         this.year = year
         this.maxSpeed = maxSpeed
         this.egine = egine
     }
     drive() {
         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
     info(){
         console.log(this);
     }
     increaseMaxSpeed(speed) {
         this.maxSpeed = speed;
     }
     changeYear(newValue) {
         this.year = newValue;
     }
     addDriver(driver) {
         this.driver = driver
     }
 }
 let peugeot= new Car ('Peugeot',' 206CC',2005,240,1.6);
 peugeot.drive()
 peugeot.info()

 peugeot.increaseMaxSpeed(260)
 console.log(peugeot.maxSpeed);

 peugeot.changeYear(2010)
 console.log(peugeot.year);

 peugeot.addDriver({name: "Andriy", age: '23'})
 console.log(peugeot.driver)
*/
/*
 ==============================================
 -створити класс попелюшка з полями ім'я, вік, розмір ноги
 --Створити 10 попелюшок , покласти їх в масив
 --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
 ==============================================
 */
 class Cinderella {
     constructor(name,age,size) {
         this.name = name
         this.age = age
         this.size = size
     }
 }
 let cinderella1 =new Cinderella ('Cinderella1',18,35);
 let cinderella2 =new Cinderella ('Cinderella2',19,36);
 let cinderella3 =new Cinderella ('Cinderella3',20,40);
 let cinderella4 =new Cinderella ('Cinderella4',21,37);
 let cinderella5 =new Cinderella ('Cinderella5',22,38);
 let cinderella6 =new Cinderella ('Cinderella6',75,36);
 let cinderella7 =new Cinderella ('Cinderella7',54,41);
 let cinderella8 =new Cinderella ('Cinderella8',36,35);
 let cinderella9 =new Cinderella ('Cinderella9',23,45);
 let cinderella10 =new Cinderella ('Cinderella10',60,35);

class Prince {
    constructor(name, age, size, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let realPrince = new Prince ('LuisAlberto',27,45);


//=========================================================================================
/*
Реалізовуємо свій компютерний магазин.
===
Необхідно реалізувати базовий клас комютера. Який має лише параметри:
Оперативна память.
Потужність процесора. (цифра від 0 до 1000)
Назва.
В кожного компютера має бути метод включання.
 */
class ComputerBase {
    constructor (memory,power,name){
        this.memory=memory;
        this.power=700;
        this.name=name;
    }
    computerBaseOn(){
        console.log('Hello my boss');
    }
}
let PC= new ComputerBase (14,700,'PC');
console.log(PC);
PC.computerBaseOn();
/*
Від базового компютрера треба реалізувати ноутбук.
Він має нову властивість дюймаж монітора.
У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
 */
class Notebook extends ComputerBase {
    constructor(memory, power, name, inch,) {
        super(memory, power, name);
        this.inch = inch;
        this.baterry = Math.round(this.power / this.inch * this.memory);
    };
}
let Samsung= new Notebook(2,700,'Samsung',1000)
    console.log (Samsung);
/*
Від ноутбука потрібно зробити ультрабук.
Він має нову змінну ваги.
При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class Ultrabook extends Notebook {
        constructor (memory,power,name,inch,weigh){
            super(memory,power,name,inch);
            this.weight = weigh;
        }
    ComputerBaseOn(){
            this.weight >=2?console.log('Error'):console.log('Hello my boss');
        }
    }
let Galaxy = new Ultrabook(30,8,'Galaxy',1000,3);
console.log(Galaxy);
Galaxy.ComputerBaseOn();

*/
 /*
Від базвого класу потрібно створити базовий ПК.
В нього має бути новий метод запуску ігор.
Кількість FPS визначається як потужність / опервтивку.
Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

class PCBase extends ComputerBase {
    constructor(memory, power, name,FPC) {
        super(memory, power, name);
        this.FPC = Math.round(this.power / this.memory);
    }
    gameOn(){

    }
}
let PCBase1= new PCBase(10,700,'Samsung',)
console.log (PCBase1);
 Help
Компютер можна апгрейдити.
Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
*/
/*
Від базового ПК необхідно зробити ігровий ПК.
Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
При запуску однієї гри потужніть процесора має падати на 0.1%.
Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
що на цьому відрі ігри не запускаються.

class PCGame extends PCBase {
    constructor(memory, power, name,FPC) {
        super(memory, power, name,FPC);
        this.FPC *= 2 ;
    }
    gameOn(){
        this.power<500 && this.memory<8 ?console.log('Error: На цьому відрі ігри не запускаються'):console.log('START!');
    }
}
let PCGame1= new PCGame(10,700,'Samsung',)
console.log (PCGame1);
PCGame1.gameOn();
*/