
/*
//1) Створити масив з 20 чисел та:
// a) відсортувати його від меншого до більшого =============================
 const numArr = [12,5,7,8,78,35,39,46,77,23,34,7,15,56,4,3,1,2,45,57];
 let sort=numArr.sort((a,b)=>{
     console.log(a);
     console.log(b);
     return a-b;
 })
 console.log(sort)

// b) відсортувати його від більшого до меншого.======================
const numArr1 = [12,5,7,8,78,35,39,46,77,23,34,7,15,56,4,3,1,2,45,57];
let sort1=numArr1.sort((a,b)=>{
    console.log(a);
    console.log(b);
    return b-a;
})
console.log(sort1);


//c) Відфілтрувати числа які є кратними 3.====================
const numArr2 = [12,5,7,8,78,35,39,46,77,23,34,7,15,56,4,3,1,2,45,57];
arrFilter=[];
for(let i =0;i<numArr2.length; i++){
    if(numArr2[i]%3===0){
        arrFilter.push(numArr2[i])
    }
}

// або просто вивести
console.log(arrFilter);
 for(let i =0;i<numArr2.length; i++){
     if(numArr2[i]%3===0){
         console.log(numArr2[i]);
     }
 };

//тепер фільтром
const numArr2_ = [12,5,7,8,78,35,39,46,77,23,34,7,15,56,4,3,1,2,45,57];
const arrFilter_ = numArr2.filter(number => number%3===0);
console.log(arrFilter_);

 // d) Відфілтрувати числа які є більшими за 10=============
const numArr3 = [12,5,7,8,78,35,39,46,77,23,34,7,15,56,4,3,1,2,45,57];
let arrFilter=[];
for(let i =0;i<numArr3.length; i++){
    if(numArr3[i]>10){
        arrFilter.push(numArr3[i])
    }
}
//коротший варіант filter
const arrFilter1=numArr3.filter(number => number>10);
console.log(arrFilter1);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
const numArr4 = [12,5,7,8,78,35,39,46,77,23,34,7,15,56,4,3,1,2,45,57];
numArr4.forEach(function(item,i,numArr4){
    document.write (`index${i}:number${item} inside arr [${numArr4}] </br>`);
});

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
const numArr5 = [12,5,7,8,78,35,39,46,77,23,34,7,15,56,4,3,1,2,45,57];
const num_three= numArr5.map(number=>number*3);
console.log(num_three)

// g) Порахувати загальну суму всіх елментів у масиві (reduce)
const numArr6 = [12,5,7,8,78,35,39,46,77,23,34,7,15,56,4,3,1,2,45,57];
const numReduceAmount = numArr6.reduce((total,number)=>total+number,0)
console.log(numReduceAmount);
*/
/*
// 2) Створити масив з 20 стрічок та:
// a) Відсортувати його в алфавітному порядку
let str =['Reduce','Map','Filter','ForEach','Flat','find','includes','Join','Reverce','a','f','g','K','Ch','L','Kh','o','i','M','A'];
let sortStr=str.sort ()
    console.log(sortStr);

//  b) Відсортувати в зворотньому порядку
let str1 =['Reduce','Map','Filter','ForEach','Flat','find','includes','Join','Reverce','a','f','g','K','Ch','L','Kh','o','i','M','A'];
let sortStr1 = str1.sort( (a,b)=>{
    if (a<b){
    } else {
        return -1
    }
})
console.log(sortStr1);

 //  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
const str =['Reduce','Map','Filter','ForEach','Flat','find','includes','Join','Reverce','a','f','g','K','Ch','L','Kh','o','i','M','A'];
const elemLengs_4= str.filter (elem=>elem.length>4)
console.log(elemLengs_4);

  //  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
const str1 =['Reduce','Map','Filter','ForEach','Flat','find','includes','Join','Reverce','a','f','g','K','Ch','L','Kh','o','i','M','A'];
const elemChange = str1.map( el => 'Sam says '+el )
console.log(elemChange);
*/

//3) Все робити тільки за допомогою методів масивів!
//    Дано масив :
    const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];
/*
//a) відсортувати його за  віком (зростання , а потім окремо спадання)
users.sort((first, last) => {
return first.age - last.age
});
console.log(users,);

users.sort((first, last) => {
return last.age - first.age
});
console.log(users,);

//b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
users.sort((two, one) => {
    if (two.name.length > one.name.length) return 1
    return -1
})
console.log(users);

users.sort((two, one) => {
    if (two.name.length > one.name.length) return -1
    return 1
})
console.log(users);


//c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення)
//та зберегти це в новий масив (первинний масив залишиться без змін)
//
let newMapArr = users.map((person,num) => {
     person.id = num
     return person
         return {id: num, ...person};

 })
console.log(newMapArr);

//d) відсортувати його за індентифікатором
newMapArr.sort((next, prev) => prev.id - next.id)
 console.log(newMapArr, 'відсортувати його за індентифікатором');

//e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let usersOnlyMarrige=(users)=>{
    return users.reduce((names,user)=>{
        if (user.isMarried){
            names.push(user.name);
        }
        if (user.isMarried){
        user.appartment="true"
        }
        return names;
    },[]);
}
console.log(usersOnlyMarrige(users)) ;
console.log(users);
*/
/*
  //Робота в аудиторії
const cars = [
   {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
   {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
   {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
   {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
   {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
   {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
   {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
   {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
   {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
   {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
   {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
   {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
   {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

// Відфільтрувати масив за наступними крітеріями :
//- двигун більше 3х літрів
 const vol_3l = cars.filter(car=>car.volume>3);
console.log(vol_3l);

// двигун = 2л
const vol_2l = cars.filter(car => car.volume==2);
console.log(vol_2l);

// виробник мерс
const producMerc = cars.filter(car => car.producer=='mercedes');
console.log(producMerc);

// двигун більше 3х літрів + виробник мерседеc
const volMerc_3l = cars.filter(car=>car.volume>=3 && car.producer=='mercedes');
console.log(volMerc_3l);

// двигун більше 3х літрів + виробник субару
const volSubaru_3l = cars.filter(car=>car.volume>=3 && car.producer=='subaru');
console.log(volSubaru_3l);

// сили більше ніж 300
const power = cars.filter(car => car.power>300);
console.log(power);

// сили більше ніж 300 + виробник субару
const powerSubaru = cars.filter(car => car.power>300&&car.producer=='subaru');
console.log(powerSubaru);

//мотор серіі ej
const engineEj = cars.filter(car => car.engine.startsWith('ej'));
console.log(engineEj);

//  сили більше ніж 300 + виробник субару + мотор серіі ej
const engineEjSubaru = cars.filter(car =>car.power>300&& car.engine.startsWith('ej')&& car.producer=='subaru');
console.log(engineEjSubaru);

// двигун меньше 3х літрів + виробник мерседес
const volumMerc_3l = cars.filter(car=>car.volume<3 && car.producer=='mercedes');
console.log(volumMerc_3l);

// двигун більше 2л + сили більше 250
const vol_2lPower = cars.filter(car=>car.volume>2 && car.power>250);
console.log(vol_2lPower);

//  сили більше 250  + виробник бмв
const powerBmw = cars.filter(car=>car.power>250&& car.producer=='bmw');
console.log(powerBmw);
*/

// - взять слдующий массив
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

// -- Відсортувати їх по ID
let sortID=usersWithAddress.sort((a,b)=>{
    return a.id-b.id
})
console.log(sortID);
//або
usersWithAddress.sort((a, b) => a.id - b.id)
console.log(usersWithAddress)

//Відсортувати їх по ID в зворотньому порядку
usersWithAddress.sort((a, b) => b.id - a.id)
console.log(usersWithAddress)

// Відсортувати по віку
let sortAge = usersWithAddress.sort((a,b)=>{
    return a.age-b.age
})
console.log(sortAge);
//or
usersWithAddress.sort((a, b) => a.age - b.age)
console.log(usersWithAddress);

//-- Відсортувати по віку в зворотньому порядку
usersWithAddress.sort((a, b) => b.age - a.age)
console.log(usersWithAddress);

//  Відсорутвати по імені
usersWithAddress.sort((a, b) => {
    if(a.name.length > b.name.length) return -1
     return 1
})
console.log(usersWithAddress);

// Відсорутвати по назві вулиці
usersWithAddress.sort((a, b) => {
     if(a.address.street > b.address.street) return 1
     return -1
 })
 console.log(usersWithAddress);

//  Відсорутвати по номеру будинку
usersWithAddress.sort((a, b) => a.address.number - b.address.number)
 console.log(usersWithAddress);

//Залишити тільки тих, хто молодший ніж 30 (filter)
const age_30 = usersWithAddress.filter(user=>user.age<30);
console.log(age_30);

// Залишити тільки одружених
const isMarried = usersWithAddress.filter(user=>user.isMarried==true);
console.log(isMarried);

//Залишити тільки одружених, які молодні за 30
const isMarriedAge_30 = usersWithAddress.filter(user=>user.isMarried==true && user.age<30);
console.log(isMarriedAge_30);

// Залишити лише тих, в кого парні номери будинків. Щось не працює
let house= usersWithAddress.filter(house => house.address.number % 2)
console.log(usersWithAddress);

//  Порахувати загальний вік всіх людей. (reduce)
let amountAge= usersWithAddress.reduce((total,person)=>{
    return total +=person.age
},0)
console.log(amountAge)
// or shortly
const amountAge1= usersWithAddress.reduce((total,person)=>total+person.age,0)
console.log(amountAge1)

// Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
let marrigeChild=(usersWithAddress)=>{
    return usersWithAddress.reduce((names,user)=>{
        if (user.isMarried && user.age>30 ){
            names.push(user.name);
        }
        if(user.isMarried && user.age>30){
        user.child='true'
        }
        return names;
  },[]);
}
console.log(marrigeChild(usersWithAddress));
console.log(usersWithAddress);

