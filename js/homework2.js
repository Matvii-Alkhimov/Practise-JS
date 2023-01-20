// 1

const k1 = '5px';
const k2 = '12djd334';
const k3 = '12.45asdwe12';
const k4 = 'qwqweeewq';

console.log(Number.parseInt(k1));
console.log(Number.parseInt(k2));
console.log(Number.parseInt(k3));
console.log(Number.parseInt(k4));

// 2

console.log(Number.parseFloat(k1));
console.log(Number.parseFloat(k2));
console.log(Number.parseFloat(k3));
console.log(Number.parseFloat(k4));

// 3

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

// 4

console.log(Math.random() * ( 19 - 3 ) + 3 );

// 5

const result = 5+5+'5';

console.log(result);
console.log(typeof(result));

// 6

const email = 'matveja709@gmail.com';

console.log(email.includes("@"));
console.log(email.length);

// 7

const a = 'My';
const b = 'name';
const c = 'is';
const fullName = a + ' ' + b + ' ' + c;

console.log(fullName + ' ' + 'Viktor');

// 8

const userName = "Введіть ім'я";
const payment = "Введіть суму до сплати";

const gotName = prompt(userName);
const gotPayment = prompt(payment);

prompt(userName);
prompt(payment);

const finalMesaage = `Дякуємо, ${gotName}! До сплати ${gotPayment} гривень`;

alert(finalMesaage);