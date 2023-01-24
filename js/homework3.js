// 1

const message = prompt('Введіть будь-яке число');
prompt('Введіть будь-яке число');

if (55 <= message && message <= 99) {
    console.log('Число потрапляє в діапазон');
} else {
    console.log('Число не потрапляє в діапазон');
}

// 2

const age = 55;
let ageGroup;

if (age >= 0 && age <= 16) {
    ageGroup = 'дитина';
    alert(`Вам ${age} років. Ваша вікова група - ${ageGroup}.`);
} else if (age >= 17 && age <= 60) {
    ageGroup = 'дорослий';
    alert(`Вам ${age} років. Ваша вікова група - ${ageGroup}.`);
} else if (age >= 61 && age <= 100) {
    ageGroup = 'пенсіонер';
    alert(`Вам ${age} років. Ваша вікова група - ${ageGroup}.`);
}

// 3

const yourName = prompt("Введіть ваше ім'я");
const yourSurname = prompt("Введіть вашу фамілію");
const summary = yourName.length + yourSurname.length;

if (yourName.length > 4 && yourSurname.length > 5) {
    alert(`Сума букв, з яких складаються ваші ім'я та прізвище = ${summary}. Робіть з цією інформацією що хочете.`);
} else if (yourName.length > 4 && yourSurname.length < 5) {
    alert('УПС! Ваше прізвище занадто коротке. Будь-ласка, спробуйте ще раз.');
} else if (yourName.length < 4 && yourSurname.length > 5) {
    alert("УПС! Ваше ім'я занадто коротке. Будь-ласка, спробуйте ще раз.");
} else if (yourName.length < 4 && yourSurname.length < 5) {
    alert("УПС! Ваші ім'я та прізвище занадто короткі. Будь-ласка, спробуйте ще раз.");
}

// 4

const randomNumber = (Math.round(Math.random() * (5 - 1) + 1));

if (randomNumber === 1) {
    alert('Число = 1');
} else if (randomNumber === 2) {
    alert('Число = 2');
} else if (randomNumber === 3) {
    alert('Число = 3');
} else if (randomNumber === 4) {
    alert('Число = 4');
} else if (randomNumber === 5) {
    alert('Число = 5');
}

// 5

const language = prompt('Введіть мову, зручну для вас. Серед варіантів: "ua", "ru", "en", "fr".');

prompt('Введіть мову, зручну для вас. Серед варіантів: "ua", "ru", "en", "fr".');

switch(language) {
    case 'ua':
        console.log('Січень');
        break;

    case 'ru':
        console.log('Январь');
        break;

    case 'fr':
        console.log('Janvier');
        break;

    case 'en':
        console.log('January');
        break
}