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
// prompt(message);



while (question != 47) {
    question = prompt(message);
    answer = 'Неправильно!Спробуйте знову!';
    alert(answer);
    prompt(message);
    break;
} 

answer = 'Правильно!';
alert(answer);