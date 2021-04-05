/*
// 1) створити функцію яка приймає масив та виводить його
// В І
function showarr (arr){
    console.log (arr);
}
    showarr (arr=[1,6,'pamparam',true]);
//В ІІ
let array=[1,6,'pamparam',true];
function showArr(arr){
    console.log(arr);
    for (let arrElement of arr) {
        console.log(arrElement)
    }
}
showArr(array);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function arrRandom(startNum, lastNum, length){
    let arrNew=[];
    for (let i = 0; i < length; i++) {
       arrNew.push(Math.floor(Math.random()*(lastNum-startNum)+startNum))
    }
    return arrNew;
}
let arrRandom1= arrRandom (1,10,15);
 console.log(arrRandom1);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNum (a,b,c) {
    let result;
   if(a < b){
       a < c ? result = a : result = c
   }else if(b < c){
        result = b
   }else{
        result = c
   }
    console.log(result);
    return result
 }
 minNum (5,22,36);

//4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum (a,b,c) {
    let result;
    if(a > b){
        a > c ? result = a : result = c
    }else if(b > c){
        result = b
    }else{
        result = c
    }
    console.log(result);
    return result
}
maxNum (5,22,36);

// 5) створити функцію яка повертає найбільше число з масиву
const functionMaxNum = (array) => {
    let result = 0;
    for (let i = 0; i< array.length; i++) {
        const element = array[i];
        if (element > result) {
            result = element
        }

    }
    return result
 }
 console.log(functionMaxNum([0,8,7,1,-1,15,34567,57,2,-55,33,7689]));

//6)  створити функцію яка повертає найменьше число з масиву
const functionMaxNum = (array) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < result) {
            result = element
        }

    }
    return result
}
console.log(functionMaxNum([0,8,7,1,-1,15,34567,57,2,-5]));

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
const arrSumReturn = (array) => {
     let result = 0;
     for (let i = 0; i < array.length; i++) {
         const element = array[i];
         result = element + result
     }
    return result
}
 console.log(arrSumReturn([7,3,4,8,-5,5]));

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const arrReturnMid = (array) => {
     let result = 0;
     for (let i = 0; i < array.length; i++) {
         const element = array[i];
         result = element + result

     }
     return result / array.length
 }
 console.log(arrReturnMid([0,8,7,1,-1,15,34567,57,2,-5]));

 // II
 function arrReturnMid (arrReturnMid){
  let result = 0;
   for(const num of arrReturnMid){
     result +=num;
   }
     return result/arrReturnMid.length;
 }
 const arrReturnMd= arrReturnMid([0,8,7,1,-1,15,34567,57,2,-5]);
 console.log (arrReturnMd);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
function objValues (arr){
    let arrObjValues = [];
    for(const elem of arr){
        console.log( Object.keys(elem));
        arrObjValues.push (elem);
    }
    return arrObjValues
};
objValues ( [objA = {a:1,b:2}, objC = {c:3,d:4}, objE = {e:5,f:6}]);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function objValues (arr){
    let arrObjValues = [];
    for(const elem of arr){
        console.log( Object.values(elem));
        arrObjValues.push (elem);
    }
    return arrObjValues
};
objValues ( [objA = {a:1,b:2}, objC = {c:3,d:4}, objE = {e:5,f:6}]);




// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:[1,2,3,4] [2,3,4,5]результат[3,5,7,9]
const arrValueAllObj = (arr1, arr2) => {
    let array = []
     for (let i = 0; i < arr1.length; i++) {
         const element1 = arr1[i];
         const element2 = arr2[i];
         array.push(element1 + element2);
     }
     return array;
 }
 console.log(arrValueAllObj([1,2,3,4], [2,3,4,5]))


// Dodatkovo
// 1) - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
// 2) Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

 const changeObj = (array, i) => {
     let arr = [];
     for (let i = 0; i < array.length; i++) {
         if (i == i) {
             arr.push(array[i + 1], array[i]);
         }else {
             arr.push(array[i]);
         }
     }
     return arr;
 }
 console.log(changeObj ([5, 31, 127, 367, 0], 1));

// 3) - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових
// значень. Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
const zeroEnd = (array) => {
   let newArray = [];
     let zero = [];
     for (let i = 0; i < array.length; i++) {
         let elem = array[i];
         if(elem === 0){
             zero.push(elem)
         }else{
             newArray.push(elem)
         }
     }
     return newArray.concat(zero);
 }
 console.log(zeroEnd([7, 0, 'str', 5, 0, 13, false, 0, 367]))

  //    console.log (arguments);
 //   for (argument of arguments){
 //       let str = argument.trim();

// ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка додає в боді блок з текстом "Hello owu"
const addDiv = (text, cars, elementID) => {
    const div = document.createElement('div');
    div.innerHTML = "Hello owu";
    document.body.appendChild(div);
};
addDiv("Hello owu");
*/






