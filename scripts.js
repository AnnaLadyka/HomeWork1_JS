/*Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9, 
a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль 
результат выражений: 
5 % 3; 
3 % 5; 
5 + '3'; 
'5' – 3; 
75 + 'кг'; 
785 * 653; 
100 / 25; 
0 * 0; 
0 / 2; 
89 / 0; 
98 + 2; 
5 – 98; 
(8 + 56 * 4) / 5; 
(9 - 12) * 7 / (5 + 2); 
+"123"; 
1 || 0; 
false || true; 
true > 0. 
Проверьте (выведите в консоль) каким типам принадлежат переменные.*/

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

/*Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром 
основания равным значению переменной a7 из задания 2, результат поместите в 
переменную VCilindra.*/

let h = 10;
let d = a7;
let π = 3.14;
let VCilindra = π * d ** 2 * h / 4;

console.log( 'Объем цилиндра =', VCilindra);

// Найдите площадь круга (SKruga) с радиусом 5см (r). 

let r = 5;
let SKruga = π * r ** 2;

console.log( 'Площадь круга =', SKruga);

/*Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см 
(h). */

let a = 5,
    b = 7,
    STrap = (a + b) * h / 2;

console.log( 'Площадь трапеции =', STrap);

/*Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%), 
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно 
содержаться в переменной Pereplata. */

let S = 2000000,
    p = 0.10,
    years = 5,
    Pereplata = S * years + S / 100 * p;

console.log( 'Переплата по кредиту =', Pereplata ,'млн. руб');  //Насчитала думаю неправильно:)

/*Решите уравнения (найдите неизвестный x), где a = 8, b = 3:  
b(x+15)=a+6x; 
x+2x+ax+bx=23780.*/

{
    let a = 8,
        b = 3,
        x = (a - 15*b)/ b - 6;
    console.log(x);
}
{
    let a = 8,
        b = 3,
        x = 23780 / (3 + a + b);
    console.log(x);
}

/*Выведите в консоль стихотворение (соблюдайте все переносы и абзацы)*/ 

let string = 'Бывало, спит у ног собака, \nкостер занявшийся гудит,\nи женщина из полумрака \nглазами зыбкими глядит.\n \n \nПотом под пихтою приляжет \nна куртку рыжую мою \nи мне, задумчивая, скажет: \n \n \n"А ну-ка, спой!.."- и я пою.';
    
console.log(string);

/*Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по 
смыслу предложения (1 абзац, переменная text):*/

let sentence1 = 'индо земля зашаталась под ногами-и вырос,';
let sentence2 = 'и заревел он голосом диким…';
let sentence3 = 'блеснула молния и ударил гром,';
let sentence4 = 'а так какое-то чудище, страшное и мохнатое,';
let sentence5 = 'как будто из-под земли, перед купцом:';
let sentence6 = 'Он подошёл и сорвал аленький цветочек.';
let sentence7 = 'зверь не зверь, человек не человек,';
let sentence8 = 'В ту же минуту, безо всяких туч,';
let text = sentence6 + sentence8 + sentence3 + sentence1 + sentence5 + sentence7 + sentence4 + sentence2;
console.log(text);