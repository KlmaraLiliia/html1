// 1.- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14,
// 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
/*
let hello='hello';
let owu='owu';
let com= 'com';
let ua='ua';
let one=1;
let negNumber=-999;
let ten=10;
let number1 = 123;
let PI=3.14;
let floatNum=2.7;
let number2=16;
let isTrue=true;
let isFalse=false;
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(negNumber);
console.log(number1);
console.log(PI);
console.log(floatNum);
console.log(number2);
console.log(isTrue);
console.log(isFalse);
alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(one);
alert(ten);
alert(negNumber);
alert(number1);
alert(PI);
alert(floatNum);
alert(number2);
alert(isTrue);
alert(isFalse);
document.write(hello);
document.write(owu);
document.write(com);
document.write(ua);
document.write(one);
document.write(ten);
document.write(negNumber);
document.write(negNumber);
document.write(negNumber);
document.write(number1);
document.write(PI);
document.write(floatNum);
document.write(number2);
document.write(isTrue);
document.write(isFalse);

2. - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи
 console.log , alert, document.write

hello='hi';
owu=7;
com= true;
ua='name';
one=35;
ten='ten';
negNumber=false;
number1 = -3456789;
PI='no';
floatNum=123;
number2='number2';
isTrue='is';
isFalse=2;
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(negNumber);
console.log(number1);
console.log(PI);
console.log(floatNum);
console.log(number2);
console.log(isTrue);
console.log(isFalse);
alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(one);
alert(ten);
alert(negNumber);
alert(number1);
alert(PI);
alert(floatNum);
alert(number2);
alert(isTrue);
alert(is False);
document.write(hello);
document.write(owu);
document.write(com);
document.write(cua);
document.write(one);
document.write(ten);
document.write(negNumber);
document.write(number1);
document.write(PI);
document.write(floatNum);
document.write(number2);
document.write(isTrue);
document.write(iaFalse);

//3. - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const strOne='hello';
const strTwo='owu';
const strThree= 'com';
const numberOne = 123;
const numberTwo=3.14;
const numberThree=2.7;
console.log(strOne);
console.log(strTwo);
console.log(strThree);
console.log(numberOne);
console.log(numberTwo);
console.log(numberThree);
alert(strOne);
alert(strTwo);
alert(strThree);
alert(numberOne);
alert(numberTwo);
alert(numberThree);
document.write(strOne);
document.write(strTwo);
document.write(strThree);
document.write(numberOne);
document.write(numberTwo);
document.write(numberThree);

//4. - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
// Для фамилии имени и отчества создать разные переменные.
// Вывести каждую при помощи console.log , alert, document.write
let firstName = prompt('Введіть Ваше імя');
let lastName = prompt('Введіть Ваше прізвище');
let fathersName = prompt('Введіть Ваше по-батькові');
console.log(lastName);
console.log(firstName);
console.log(fathersName);
alert(lastName);
alert(firstName);
alert(fathersName);
document.write(lastName);
document.write(firstName);
document.write(fathersName);

//5. - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
let person = lastName + firstName + fathersName;

//6. - Взять задание 4 и 5 и применить его к ФИО всех членов своей семьи.
firstName = prompt('Введіть імя матері');
lastName = prompt('Введіть прізвище матері');
fathersName = prompt('Введіть по-батькові матері');
console.log(lastName);
console.log(firstName);
console.log(fathersName);
alert(lastName);
alert(firstName);
alert(fathersName);
document.write(lastName);
document.write(firstName);
document.write(fathersName);
let mother = lastName + firstName + fathersName;

firstName = prompt('Введіть імя батька');
lastName = prompt('Введіть прізвище батька');
fathersName = prompt('Введіть по-батькові батька');
console.log(lastName);
console.log(firstName);
console.log(fathersName);
alert(lastName);
alert(firstName);
alert(fathersName);
document.write(lastName);
document.write(firstName);
document.write(fathersName);
let father = lastName + firstName + fathersName;

lastName = prompt('Введіть прізвище брата');
firstName = prompt('Введіть імя брата');
fathersName = prompt('Введіть по-батькові брата');
console.log(firstName);
console.log(lastName);
console.log(fathersName);
alert(firstName);
alert(lastName);
alert(fathersName);
document.write(firstName);
document.write(lastName);
document.write(fathersName);
let brother = firstName + lastName + fathersName;

// 7.- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. Вывести их в консоль.
let num1= +prompt('Enter number');
let num2= +prompt('Enter number');
let num3= +prompt('Enter number');
console.log(num1,num2,num3);

// 8.- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let int1= parseInt(prompt('Enter number'));
let int2= parseInt(prompt('Enter number'));
let int3= parseInt(prompt('Enter number'));
let int4= parseInt(prompt('Enter number'));
let result= int1 + int2 +int3 + int4;
console.log(result);

//9. - при помощи prompt()  получить 3 числа с плавающей точекой. При помощи parseFloat привести их к соответсвующему типу.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let float1= parseFloat(prompt('Enter number'));
let float2= parseFloat(prompt('Enter number'));
let float3= parseFloat(prompt('Enter number'));
result= float1 + float2 +float3;
console.log(result);
//10. - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их
// между собой записав результат в переменную  и вывести в консоль браузера


// 11.- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
// Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью.
// При помощи Math.pow возвести первое число в степень второго числа.
let num = parseInt(prompt('Enter number'));
let degree= parseInt(prompt('Enter degree'));
result= Math.pow(num,degree);

//12. - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100;
// let b = '100'; let c = true; let d = undefined;
let a = 100; console.log(typeof(a));
let b = '100'; console.log(typeof(b));
let c = true; console.log(typeof(c));
let d = undefined; console.log(typeof(d))

// 13.- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true
let isFiveOrSix1= 5<6;
let isFiveOrSix2= 5>6;
let isFiveOrSix3= 5>=6;
let isFiveOrSix4= 5===6;
let isTenOrTen1= 10>=10;
let isTenOrTen2= 10<=10;
let isTenOrTen3= 10!==10;
let isTenOrTen4= 10>10;
let isTenOrTen5= 10<10;
let isNumOrStr1=123 ==='123';
let isNumOrStr2=123 =='123';


// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 ); //false
// console.log(34 > 33 && 23 < 90 ); //true
// console.log(99 > 100 && 45 > 12 ); //false
// console.log(132 > 100 || 45 < 12 );//true
// console.log(111 > 11 || 45 < 111 );//true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );//true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );//false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//true
// console.log(!!'-1');//true
// console.log(!!-1);//true
// console.log(!!'0');//true
// console.log(!!'null');//true
// console.log(!!'undefined');//true
// console.log(!!(3/'owu'));//false
// console.log((111 > 11 || 45 < 111) ||  !!'0');//true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));//false


// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
let str="Привет";
let num=123;
let flag=true;
let txt= "true";
console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(flag));
console.log(typeof(txt));

//2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.)
// найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);

// 4. Напишите код, который находит площадь прямоугольника. Высота 23см ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
const height = 23;
const width = 10;
let s= height * width;
console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
const heightC = 10;
const dC = 4;
let v = Math.PI*Math.pow(dC/2,2)*heightC;
console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень)
//   или оператор возведения в степень ** ).
const n = 3;
const m = 4;
let k = Math.pow(n**2+m**2,1/2);
console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write,
// alert и console.log
let str= "Hello world";
console.log(str);
alert(str);
document.write(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби
//(каждой на новой строки спомощью \n).
alert("Khmara Liliia Igorivna \n 35 років \n Ski");

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
let str1 = 'Хто ';
let str2 = 'ти ';
let str3 = 'такий?';
let concatenation = str1+ str2+ str3;
document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
 let str = "20";
 let a = 5;
 document.write(str + a + "<br/>");// 205 з переходом на новий рядок, конкатинація
document.write(str - a + "<br/>"); // 15 з переходом на новий рядок,значення змінної str буде приведено до числового типу
document.write(str * "2" + "<br/>"); // 40 з переходом на новий рядок, значення змінної str і "2" буде приведено до числового типу
document.write(str / 2 + "<br/>"); // 10 з переходом на новий рядок, значення змінної str буде приведено до числового типу

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//parseInt("3.14");
//parseInt("-7.875");
//parseInt("435");
//parseInt("Вася");
console.log(parseInt("3.14")); //3
console.log(parseInt("-7.875"));//-7
console.log(parseInt("435"));//435
console.log(parseInt("Вася"));//NaN

//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее,
// повторите код ниже
// let str = prompt("Enter something", "ho-ho")
//     console.log(str);
let str1 = prompt("Enter something", "ho-ho")
console.log(str1);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// Не впевнена чи правильно зрозуміла завдання.
let sum = prompt( 777 + 333);
alert (sum);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида. Доброго вечера Иван Иванов, мои поздравления что вам 32 ,
// а вывод результата при помощи метода alert
let firstName = prompt('Enter your First Name');
let lastName=prompt('Enter your Last Name');
let age=prompt('Enter your Age');
alert('Доброго вечора '+firstName+' '+lastName+', мои вітання що вам '+age);
 */
