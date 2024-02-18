// const obj1 = {
//     a: 1,
// }

// const obj2 = Object.create(obj1);
// obj2.b = 2;

// const obj3 = Object.create(obj2);
// obj3.c = 3;

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);




// const elements = {
//     counterEl: document.querySelector("#counter"),
//     minusButtonEl: document.querySelector("#counter > button[data-action='decrement']"),
//     plusButtonEl: document.querySelector("#counter > button[data-action='increment']"),
//     scoreSpanEl: document.querySelector("#value"),
// }

// let counterValue = 0;

// const increment = () => {
//     counterValue += 1;
//     elements.scoreSpanEl.textContent = counterValue;
// }

// const decrement = () => {
//     counterValue -= 1;
//     elements.scoreSpanEl.textContent = counterValue;
// }

// elements.plusButtonEl.addEventListener("click", increment);
// elements.minusButtonEl.addEventListener("click", decrement)




// class Car {
//     constructor(model, price, year, color) {
//         this.model = model
//         this.prise = price
//         this.year = year
//         this.color = color
//     }
// }

// const audi = new Car("A25", 20000, 2007, "red");
// console.log(audi);

// const mazda = new Car("GH67", 45000, 2016, "orange");
// console.log(mazda);



// Створіть клас Person, що містить властивості firstName та lastName. 
// Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".
// const person1 = new Person('John', 'Doe');
// console.log(person1.getFullName()); // John Doe


class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    getFullName() {
        console.log(`New person - ${this.firstName} ${this.lastName}`)
    }
}


const person1 = new Person('John', 'Doe');
console.log(person1.getFullName());




// Створіть клас Rectangle, що містить властивості width та height. 
// Додайте метод getArea(), який повертає площу прямокутника.
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50


class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    getArea() {
        console.log(`The area is - ${this.height * this.width}`);
    }
}

const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.getArea());