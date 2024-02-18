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



// const message = 'Введіть вашу кількість хромосом';
// let question = prompt(message);
// let answer;
// const conf = confirm(`Ваша відповідь - ${question}. Ви впевнені?`);

// if (conf === true) {
//     alert('Перевіряємо правдивість відповіді...');
// } else {
//     alert('Тоді впишіть ще раз. Перезавантажте сторінку.');
// }

// if (question == 47) {
//     alert('Висновок: ви даун.');

//     if (prompt('Поставте оцінку нашому тесту, будь-ласка:)') >= 10) {
//         alert('Дякуємо за вашу оцінку:)');
//     } else {
//         alert('Ти охуїв?');
//     }
// } else {
//     alert('Дивно, схоже, ви щось неправильно вписали, спробуйте ще раз.');
// }





// let question = prompt("Введіть ваше ім'я");


// if (question.length <= 2) {
//     alert("Ваше ім'я занадто маленьке, введіть щось інше");
//     question = prompt("Введіть ваше ім'я");
// } else if (question.length > 10) {
//     alert("Ваше ім'я занадто довге, спробуйте ще раз");
//     question = prompt("Введіть ваше ім'я");
// } else if (question.length >= 2 && question.length <= 10) {
//     let conf = confirm(`Ваше ім'я - ${question}`);

//     while (conf !== true) {
//         alert("Спробуйте ще раз");
//         question = prompt("Введіть ваше ім'я");
//         conf = confirm(`Ваше ім'я - ${question}`);
//     }
// }

// alert(`Дякуємо, ${question}!Ми завели вас до нашого архіву!`);

// const clients = ['Max', 'Sofia', 'Danya', question];


// console.log(clients[3]);


// for ( const client of clients) {
//     let conf = confirm(`Ваше ім'я - ${client}?`);
//     if (conf === true) {
//         alert("Чудово, ми вас знайшли!");
//         break;
//     } else {
//         alert("Продовжуємо шукати");
//     }
// }



let question;
let clients = [];

for (let i = 1; i <= 3; i += 1) {
    question = prompt("Введіть ім'я");
    console.log(question);

    clients.push(question);
}
alert("Всі місця зайняті");
let conf = confirm(`Бажаєте когось замінити?`);
if (conf === true) {
    let oldPerson = prompt(`Впишіть номер особи, котру хочете видалити. 0 - ${clients[0]}, 1 - ${clients[1]}, 2 - ${clients[2]}.`);
    let newPerson = prompt(`Напишіть ім'я нової особи`);

    let secondConf = confirm(`Особа ${oldPerson} буде замінена на особу ${newPerson}`);

    while (secondConf === false) {
        alert('Спробуймо ще раз');
        conf = confirm(`Бажаєте когось замінити?`);

        if(conf === false) {
            break;
        }
        oldPerson = prompt(`Впишіть номер особи, котру хочете видалити. 0 - ${clients[0]}, 1 - ${clients[1]}, 2 - ${clients[2]}.`);
        newPerson = prompt(`Напишіть ім'я нової особи`);

        secondConf = confirm(`Особа ${oldPerson} буде замінена на особу ${newPerson}`);
    }

    clients.splice(oldPerson, 1, newPerson);

    alert(`Остаточний список : ${clients[0]}, ${clients[1]}, ${clients[2]}.`);

}

alert(`Остаточний список : ${clients[0]}, ${clients[1]}, ${clients[2]}.`);

console.log(`Учасники : ${clients}`);

    