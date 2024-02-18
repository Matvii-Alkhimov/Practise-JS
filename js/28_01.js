// for(let i = 0; i < 10; i += 1) {
//     console.log(i);
// }

/*
 * Напиши скрипт який підраховує загальну суму зп працівників.
 * Кількість робітників зберігається в змінній employees.
 * ЗП кожного працівника це випадкове число від 500 до 5000
 * Записати суму в змінну totalSalary і вивести в консоль
 */


// const employers = 40;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;

// for (let i = 1; i <= employers; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`salary${i} - ${salary}`);

//     totalSalary += salary;
    
// }
// console.log(`Total salary - ${totalSalary}`);



/*
 * Напиши скрипт який порахує суму всіх парних чисел,
 * які входять в діапазон чисел в змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому 2 парних числа - 2 та 4, їх сума 6.
 */



// const minNumber = 0;
// const maxNumber = 5;
// let numberSummary = 0;

// for (let i = minNumber; i <= maxNumber; i += 1) {

//     if (i % 2 === 0) {
//         numberSummary += i;
//     }
    
// }
// console.log(`Number's summary - ${numberSummary}`);










// for (let i = 1; i <= 10; i +=1) {
//     console.log(i);
// }



// 4. Написати скрипт який буде перевіряти середній бал успішності учня.
// Прервати роботу циклу, коли середній бал буде меньше 7.



// let english = Math.round(Math.random() * (12 - 1) + 1);
// let math = Math.round(Math.random() * (12 - 1) + 1);
// let ukrainian = Math.round(Math.random() * (12 - 1) + 1);
// let physics = Math.round(Math.random() * (12 - 1) + 1);
// let chemistry = Math.round(Math.random() * (12 - 1) + 1);


// let mark = Math.round((english + math + ukrainian + physics + chemistry) / 5);

// console.log(`ukrainian - ${ukrainian}`);
// console.log(`english - ${english}`);
// console.log(`math - ${math}`);
// console.log(`chemistry - ${chemistry}`);
// console.log(`physics - ${physics}`);
// console.log(`MARK - ${mark}`);

// while (mark >= 7) {
//     english = Math.round(Math.random() * (12 - 1) + 1);
//     math = Math.round(Math.random() * (12 - 1) + 1);
//     ukrainian = Math.round(Math.random() * (12 - 1) + 1);
//     physics = Math.round(Math.random() * (12 - 1) + 1);
//     chemistry = Math.round(Math.random() * (12 - 1) + 1);

//     mark = Math.round((english + math + ukrainian + physics + chemistry) / 5);
//     console.log(`ukrainian - ${ukrainian}`);
//     console.log(`english - ${english}`);
//     console.log(`math - ${math}`);
//     console.log(`chemistry - ${chemistry}`);
//     console.log(`physics - ${physics}`);
//     console.log(`MARK - ${mark}`);

//     // if (mark < 7) {
//     //     console.log('Оцінка мала');
//     // }
// }

