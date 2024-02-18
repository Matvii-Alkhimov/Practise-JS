// 1

const fn1 = function(obj) {
    let fullNameMessage = `Fullname - ${obj["name"]} ${obj["surname"]}`;

    if (obj["name"] === undefined && obj["surname"] === undefined) {
        fullNameMessage = "Name and surname are undefined";
    } else if (obj["name"] === undefined) {
        fullNameMessage = `Name is not defined. The surname is ${obj["surname"]}`;
    } else if (obj["surname"] === undefined) {
        fullNameMessage = `Surname is not defined. The name is ${obj["name"]}`;
    }

    return fullNameMessage;
}

const obj1 = {
    name: "Matvii",
    surname: "Alkhimov",
    age: 15,
    country: "Ukraine",
}

const obj2 = {
    name: "Nigg",
    surname: "Er",
    age: 8,
}

const obj3 = {
    name: "Mike",
    surname: "Miller",
    country: "USA",
}

console.log(fn1(obj1));
console.log(fn1(obj2));
console.log(fn1(obj3));

// 2

const obj4 = {
    name: "Toyota",
    model: "X87",
    date: 2014
}

const fn2 = function(obj) {
    const carInfo =  `${obj["name"]} : model - ${obj["model"]}, date - ${obj["date"]}`;

    return carInfo;
}

console.log(fn2(obj4));

