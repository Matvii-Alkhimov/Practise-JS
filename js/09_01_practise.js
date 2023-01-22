// let totalPrise = 0;
// const quantity = 11;
// const priseCost = 12345678;
// totalPrise = quantity * priseCost;
// console.log(totalPrise);

// const order = prompt('Введіть кількість замовлення');
// confirm('Ви впевнені, що хочете замовити ' + order);
// alert(order);

// const a = 1;
// const b = true;

// console.log(a === b);


// const a = null;
// const b = 0;

// console.log(null == 0);
// console.log(typeof a);
// console.log(typeof b);

// console.log(2 && 3);
// console.log(0 || NaN);




// if (question == 47) {
//     answer = 'Правильно!';
//     alert(answer);
// } else {
//     answer = 'Неправильно!Спробуйте знову!';
//     alert(answer);
//     prompt(message);
// }




const message = 'Введіть вашу кількість хромосом';
let question = prompt(message);
let answer;
const conf = confirm(`Ваша відповідь - ${question}. Ви впевнені?`);
// const mark = prompt('Поставте оцінку нашому тесту, будь-ласка:)')

prompt(message);
confirm(`Ваша відповідь - ${question}. Ви впевнені?`);

if (conf === true) {
    alert('Перевіряємо правдивість відповіді...');
} else {
    alert('Тоді впишіть ще раз. Перезавантажте сторінку.');
}

if (question == 47) {
    alert('Висновок: ви даун.');
    prompt('Поставте оцінку нашому тесту, будь-ласка:)');
    console.log(prompt('Поставте оцінку нашому тесту, будь-ласка:)'));
} else if (question != 47) {
    alert('Дивно, схоже, ви щось неправильно вписали, спробуйте ще раз.');
}