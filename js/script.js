'use strict'
// -----------------------low------------------

// ------low 1
// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let age = +prompt('Скільки тобі повних років?', '');

if (age >= 0, age <= 11) {
    alert(`Ти Дитина`);
} else if (age >= 12, age <= 17) {
    alert(`Ти підліток`);
} else if (age >= 18, age <= 59) {
    alert(`Ти дорослий`);
} else if (age >= 60, age <= 120) {
    alert(`Ти пенсіонер`);
} else if (age >= 121) {
    alert(`Не бреши!))) Стільки не живуть!`);
} else {
    alert(`Введи вік правильно!`);
}

// ------low 2
// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let numTest = prompt(`Введи цифру від 0 до 9 а я покажк тобі символ`);

switch(numTest) {
    case '1': alert(`Знак    !`);
    break
    case '2': alert(`Знак    @`);
    break
    case '3': alert(`Знак    #`);
    break
    case '4': alert(`Знак    $`);
    break
    case '5': alert(`Знак    %`);
    break
    case '6': alert(`Знак    ^`);
    break
    case '7': alert(`Знак    &`);
    break
    case '8': alert(`Знак    *`);
    break
    case '9': alert(`Знак    (`);
    break
    case '0': alert(`Знак    )`);
    break
    default: alert(`Введи цифру, а не фігню всяку!)))`);
}

// ------low 3
// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

alert('давай пограемо в гру... ти по черзі введеш два числа, а я порахую суму чисел в цьому діапазоні');
let nunFirst = +prompt('Введи від якого числа будемо рахувати', '');

let numSecond = +prompt('Введи до якого числа будемо рахувати', '');

let testResult =  (nunFirst + numSecond ) * (numSecond - nunFirst + 1 ) / 2;
alert(`Сумма всіх введенних тобою чисел ${(testResult)}`);

// ------low 4
// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

alert(`Давай знайдемо найбільший спільний дільник двох чисел`);
let dividend = +prompt('Ділитель', '');
let divider = +prompt('Дільник', '');
let largerDivider;
while (dividend!=divider) {
  if (dividend>divider) {
    dividend = dividend - divider;
  }
  else {
    divider = divider - dividend;
  }
}
largerDivider = dividend;
alert(`Найбільший спільний дільник ${(largerDivider)}`);

// ------low 5
// Запитай у користувача число і виведи всі дільники цього числа.

let sumr = '';
let naturalNum = +prompt('Введи ціле число, а я покажу всі його дільники', '');

  for (let i = 2; i * 2 <= naturalNum; i++) { 
    if (naturalNum % i == 0) { 
       sumr = sumr + (i + ' '); 
    } 
}
alert(`Ось всі дільники цього числа ${sumr} `); 

// ---------------------medium------------------------------

// -----medium 1
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let numbFive = prompt('Введи ціле п’ятирозрядне число, а я перевірю чи є воно паліндромом ', '');
let numbFiveRevers = numbFive.split('').reverse().join('');

if (numbFive === numbFiveRevers) {
    alert(`Число є паліндромом`);
} else {
    alert(`Число не є паліндромом`);
}

// -----medium 2
// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

alert('У нас сьогодні акція! Чим більше купляеш тим більше знижка!!!');

let money = +prompt('Купуючи від 200 Грн. отримаеш знижку. Яка в тебе сума покупки?', '');

if (money >= 200 && money <= 299.99) {
    let discount3 = money - (money * 0.03);
    alert(`Твоя знижка 3%, до оплати  ` + discount3);
} else if (money >= 300 && money <= 499.99) {
    let discount5 = money - (money * 0.05);
    alert(`Твоя знижка 5%, до оплати  ` + discount5);
} else if (money >= 500) {
    let discount7 = money - (money * 0.07);
    alert(`Твоя знижка 7%, до оплати  ` + discount7);
} else if (money <= 199.99) {
    alert(`Нажаль до 200 Грн. знижка не передбачена`);
} else {
    alert(`Введи суму покупки!`);
}

// -----medium 4
// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let x = true;
for (let i = 1; x === true; i++) {

    while (x === true) {  
        if (i == 1) {
            x = confirm(`Понеділок`);
        } else if (i == 2) {
            x = confirm(`Вівторок`);
        } else if (i == 3) {
            x = confirm(`Середа`);
        } else if (i == 4) {
            x = confirm(`Четверг`);
        } else if (i == 5) {
            x = confirm(`П'ятниця`);
        }else if (i == 6) {
            x = confirm(`Субота`);
        }else if (i == 7) {
            x = confirm(`Неділя`);
        } 
        else {
            i = 0;
        }
        i++; 
    }
}
