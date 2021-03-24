1.// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14,
// 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
/*let hello='hello';  console.log(hello);  alert(hello);   document.write(hello);
let owu='owu';  console.log(owu);  alert(owu);   document.write(owu);
let com= 'com'; console.log(com);  alert(com);   document.write(com);
let ua='ua';    console.log(ua);  alert(ua);   document.write(ua);
let one=1;  console.log(one);  alert(one);   document.write(one);
let ten=10; console.log(ten);  alert(ten);   document.write(ten);
let negNumber=-999; console.log(negNumber);  alert(negNumber);   document.write(negNumber);
let number1 = 123;  console.log(number1);  alert(number1);   document.write(number1);
let PI=3.14;    console.log(PI);  alert(PI);   document.write(PI);
let floatNum=2.7;   console.log(floatNum);  alert(floatNum);   document.write(floatNum);
let number2=16; console.log(number2);  alert(number2);   document.write(number2);
let isTrue=true;    console.log(isTrue);  alert(isTrue);   document.write(isTrue);
let isFalse=false;  console.log(isFalse);  alert(isFalse);   document.write(isFalse);
document.write('<br>');
//2. - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи
// console.log , alert, document.write
hello='hi';  console.log(hello);  alert(hello);   document.write(hello);
owu=7;  console.log(owu);  alert(owu);   document.write(owu);
com= true; console.log(com);  alert(com);   document.write(com);
ua='name';    console.log(ua);  alert(ua);   document.write(ua);
one=35;  console.log(one);  alert(one);   document.write(one);
ten='ten'; console.log(ten);  alert(ten);   document.write(ten);
negNumber=false; console.log(negNumber);  alert(negNumber);   document.write(negNumber);
number1 = -3456;  console.log(number1);  alert(number1);   document.write(number1);
PI='no';    console.log(PI);  alert(PI);   document.write(PI);
floatNum=123;   console.log(floatNum);  alert(floatNum);   document.write(floatNum);
number2='number2'; console.log(number2);  alert(number2);   document.write(number2);
isTrue='is';    console.log(isTrue);  alert(isTrue);   document.write(isTrue);
isFalse=2;  console.log(isFalse);  alert(isFalse);   document.write(isFalse);
document.write('<br>');
//3. - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const strOne='hello';  console.log(strOne);  alert(strOne);   document.write(strOne);
const strTwo='owu';  console.log(strTwo);  alert(strTwo);   document.write(strTwo);
const strThree= 'com'; console.log(strThree);  alert(strThree);   document.write(strThree);
const numberOne = 123;  console.log(numberOne);  alert(numberOne);   document.write(numberOne);
const numberTwo=3.14;    console.log(numberTwo);  alert(numberTwo);   document.write(numberTwo);
const numberThree=2.7;   console.log(numberThree);  alert(numberThree);   document.write(numberThree);
document.write('<br>');
//4. - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
// Для фамилии имени и отчества создать разные переменные.
// Вывести каждую при помощи console.log , alert, document.write
let firstName = prompt('Введіть Ваше імя');
let lastName = prompt('Введіть Ваше прізвище');
let fathersName = prompt('Введіть Ваше по-батькові');
console.log(lastName);  alert(lastName);   document.write(lastName);
console.log(firstName);  alert(firstName);   document.write(firstName);
console.log(fathersName);  alert(fathersName);   document.write(fathersName);
//5. - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
let person = lastName + firstName + fathersName;
//6. - Взять задaние 4 и 5 и применить его к ФИО всех членов своей семьи.
firstName = prompt('Введіть імя матері');
lastName = prompt('Введіть прізвище матері');
fathersName = prompt('Введіть по-батькові матері');
console.log(lastName);  alert(lastName);   document.write(lastName);
console.log(firstName);  alert(firstName);   document.write(firstName);
console.log(fathersName);  alert(fathersName);   document.write(fathersName);
let mother = lastName + firstName + fathersName;
lastName = prompt('Введіть прізвище батька');
firstName = prompt('Введіть імя батька');
fathersName = prompt('Введіть по-батькові батька');
console.log(lastName);  alert(lastName);   document.write(lastName);
console.log(firstName);  alert(firstName);   document.write(firstName);
console.log(fathersName);  alert(fathersName);   document.write(fathersName);
let father = lastName + firstName + fathersName;
lastName = prompt('Введіть прізвище брата');
firstName = prompt('Введіть імя брата');
fathersName = prompt('Введіть по-батькові брата');
console.log(lastName);  alert(lastName);   document.write(lastName);
console.log(firstName);  alert(firstName);   document.write(firstName);
console.log(fathersName);  alert(fathersName);   document.write(fathersName);
let brother = lastName + firstName + fathersName;
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
// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
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
// console.log(132 > 100 && 45 < 12 ); //->false
// console.log(34 > 33 && 23 < 90 ); //->true
// console.log(99 > 100 && 45 > 12 ); //->false
// console.log(132 > 100 || 45 < 12 );//->true
// console.log(111 > 11 || 45 < 111 );//->true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );//->true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//->true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );//->false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//->true
// console.log(!!'-1');//->true
// console.log(!!-1);//->true
// console.log(!!'0');//->true
// console.log(!!'null');//->true
// console.log(!!'undefined');//->true
// console.log(!!(3/'owu'));//-false
// console.log((111 > 11 || 45 < 111) ||  !!'0');//->true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));//->false


// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
//let str="Привет"; console.log(typeof(str));
//let num=123;    console.log(typeof(num));
//let flag=true;  console.log(typeof(flag));
//let txt= "true";    console.log(typeof(txt));
//2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.)
// найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
let a1 = 5 + 3;   console.log(a1);
let a2 = 5 - 3;   console.log(a2);
let a3 = 5 * 3;   console.log(a3);
let a4 = 5 / 3;   console.log(a4);
let a5 = 5 % 3;   console.log(a5);

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
let a6 = 5 % 3; console.log(a6);
let a7 = 3 % 5; console.log(a7);
let a8 = 5 + '3'; console.log(a8);
let a9 = '5' - 3; console.log(a9);
let a10 = 75 + 'кг';console.log(a10);

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
document.write(str + a + "<br/>"); console.log(str + a + "<br/>");// 205 з переходом на новий рядок, конкатинація
document.write(str - a + "<br/>"); console.log(str - a + "<br/>"); //15 з переходом на новий рядок,значення змінної str буде приведено до числового типу
document.write(str * "2" + "<br/>"); console.log(str * "2" + "<br/>"); //40 з переходом на новий рядок, значення змінної str і "2" буде приведено до числового типу
document.write(str / 2 + "<br/>"); console.log(str / 2 + "<br/>"); //10 з переходом на новий рядок, значення змінної str буде приведено до числового типу

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
