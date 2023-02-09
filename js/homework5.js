// 1

const Arr1 = [1, 5, "4", "hello"];
const Arr2 = [true, 2, {}, ["a"], 222];

console.log(Arr1[1]);
console.log(Arr2[1]);
console.log(Arr1[1] + Arr2[1]);

// 2

Arr1.splice(Arr1.length, 0, 22);

for(const elements of Arr1) {
    console.log(elements);
}

// 3

for(const elements2 of Arr2) {
    console.log(`${elements2} - ${typeof(elements2)}`);
}

// 4

const message = 'Welcome to Ukraine!';
const mass = message.split("");

console.log(mass);
console.log(mass.indexOf("l"));

const str = mass.join("");

console.log(str);

// 5

const styles = ["Джаз", "Блюз",];

styles.splice(styles.length, 0, "Рок-н-Ролл");
styles.splice(1, 1, "Класика");

const elementToDelete = styles[0];

styles.splice(0, 1);
alert(`Видалений елемент - ${elementToDelete}`);
styles.splice(0, 0, "Реп", "Реггі");

console.log(styles);