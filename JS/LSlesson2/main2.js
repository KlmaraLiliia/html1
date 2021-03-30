/*
//1.--створити масив та вивести його в консоль:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого тип
let str = [1,2,3,4,5];
let num = ['one', 'two', 'three', 'four', 'five'];
let mix = [1, 'two', true, 4, false];
console.log(str);
console.log(num);
console.log(mix);

// 2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let num =[];
num [0] = 1;
num [1] = true;
num [2] = 'owu';
console.log (num);

console.log (num[0], num[1],num[2], num[3], num[4]);
3.- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i =7; i<17; i++){
    document.write(`<div> Сьогодні ${i} число`);
}
4.- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині i індексом всередині
for (let i =7; i<17; i++){
    document.write(`<div> Сьогодні ${i} число`);
}
5.-- the same --За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом
6.- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
7.- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// 8.Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNumbers = [1,2,3,4,5,6,7,8,9,10];
for ( const num of arrNumbers){
    console.log(num);
}
// 9. Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі
let arrStrings = ['one','two','three','four','five','six','seven','eight','nine','ten'];
for ( const string of arrStrings) {
    console.log(string);
}

// 10.  Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrMix = ['one','two',3,true,'five','boolean','-34876','eight',7,'ten'];
for ( const mix of arrMix) {
    console.log(mix);
}

// 11. Створити масив з 10 елементів числового, стірчкового і булевого типу.
//За допомогою if та typeof вивести тільки булеві елементи
let arrMix = ['one','two',3,true,'five','boolean','-34876',false,7,true];
for( i =0; i<arrMix.length; i++){
if (typeof(arrMix) [i]==='boolean'){
    console.log (arrMix [i]);
}
}

варіант ІІ
 let arrMix = ['one','two',3,true,'five','boolean','-34876',false,7,true];
for (let elem of arrMix){
    if (typeof elem === 'boolean' ){
        console.log(elem);
    }
}

варіант ІІI
let arrMix = ['one','two',3,true,'five','boolean','-34876',false,7,true];
    let i =0;
    while (i < arrMix.length) {
        if (typeof arrMix [i] === 'boolean') {
            console.log(arrMix[i]);
            i++;
        }
    }

// 12. Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let arrMix = ['one','two',3,true,'five','boolean','-34876',false,7,true];
for( i =0; i<arrMix.length; i++){
    if (typeof(arrMix) [i]==='number'){
        console.log (arrMix [i]);
        i+=1
    }
}
// 13. Створити масив з 10 елементів числового, стрічкового і булевого типу.
//За допомогою if та typeof вивести тільки рядкові елемент
let arrMix = ['one','two',3,true,'five','boolean','-34876',false,7,true];
for(let i =0; i<arrMix.length; i++){
    if (typeof(arrMix) [i]==='string'){
        console.log (arrMix [i]);
    }
}
 варіант ІІ
 let arrMix = ['one','two',3,true,'five','boolean','-34876',false,7,true];
for (let elem of arrMix){
    if (typeof elem === 'string' ){
        console.log(elem);
    }
}

// 14. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
 let arrMix = [];
 arrMix [0] = 1;
 arrMix [1] = 'one';
 arrMix [2] = 'boolean';
 arrMix [3] = true;
 arrMix [4] = 2;
 arrMix [5] = 'two';
 arrMix [6] = false;
 arrMix [7] = '761';
 arrMix [8] = true;
 arrMix [9] = 7;
 for (const elem of arrMix){
     console.log(elem);
     || або
      console.log (arrMix[i]);
 }
 // 15. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let arrMix = ['one','two',3,true,'five','boolean','-34876',false,7,true,8];
for( i =0; i<=10; i++){
    document.write(arrMix [i]);
    console.log (arrMix [i]);
}
// 16. Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for ( i=1; i<=100; i++){
    console.log(i);
    document.write(i);
}
// 17.- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for ( i=1; i<=200; i=i+2){
    console.log(i);
    document.write(i);
}
// 18.- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 2; i<=100; i+=2){
    console.log(i);
    document.write (i + '<br>');
 }
// 19.- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for ( i=1; i<=200; i=i+2){
    console.log(i);
    document.write(i);
}
// 20.- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// 21.- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// ВаріантІ
for (let hour = 0; hour<3; hour++) {
    for (let min = 0; min < 60; min++) {
        if (hour === 2 && min === 20){
            break;
    }
    for (let sec = 0; sec < 60; sec++) {
        console.log(hour + 'год.' + min + 'хв.' + sec + 'сек.')

      }
    }
}
// ВаріантІІ
for (let hour = 0; hour< 2; hour++){
    for (let min = 0; min < 60; min++){
        for (let sec = 0; sec<60; sec++){
            console.log(`there is ${hour}:${min}:${sec} now`)
        }
    }
}


//РОБОТА В АУДИТОРІЇ
// 1. - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr = ['a', 'b', 'c'];
for (let i=1;i<=3;i++){
    arr.push(i);
    console.log(arr);
}

// 2. Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let arr = [1,2,3];
arr [0]= 3;
arr [2]= 1;
console.log (arr);

// 3. Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let arr = [1, 2, 3];
arr.push(4,5,6);
console.log(arr);

// 4. Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let arr = [1, 2, 3];
arr.unshift(4,5,6);
console.log(arr);

// 5. Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let arr = ['js', 'css', 'jq'];
alert(arr.shift());

// 6. Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let arr = ['js', 'css', 'jq'];
alert( arr.pop());

// 7. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3));

// 8. Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2]
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice (0, 2));

// 9. Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr = [1, 2, 3, 4, 5];
arr.splice (3,0,'a', 'b', 'c',);
console.log (arr);

// 10. Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr = [1,2,3,4,5,6,7,8,9,10];
for (let elem of arr){
    if ( elem % 2 === 0 ){
        console.log(elem);
    }
}
// Варіант ІІ
let arr = [1,2,3,4,5,6,7,8,9,10];
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
}

// 11. Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let arrFull = [11,22,33,44,55,66,77,88,99,100];
let arrEmpty = [];
for (let i=0;i<10;i++){
    arrEmpty.push(arrFull[i]);
    console.log(arrEmpty);
}

// 12. Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrFull = [11,22,33,44,55,66,77,88,99,100];
let arrEmpty = [];
for (let i=0;i<2;i++){
    arrEmpty.push(arrFull);
    console.log(arrEmpty);
}

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
let arr= [2,17,13,6,22,31,45,66,100,-18];
let i =0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// 2. перебрати його циклом for
let arr= [2,17,13,6,22,31,45,66,100,-18];
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// Не працює
let arr= [2,17,13,6,22,31,45,66,100,-18];
let i =0;
while (i < arr.length) {
    if ( i % 2 == 1){
        console.log(arr[i]);
    i++;
    break;
    }
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let arr = [2,17,13,6,22,31,45,66,100,-18];
for (let elem of arr){
    if ( elem % 2 === 0 ){
        console.log(elem);
    }


// Вивести кожен елемент масиву, сусід справа якого є парним
let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i=0; i < arr.length; i++){
    if(arr [i+1] %2 ===0){
        console.log(arr[i]);
    }
}
*/


