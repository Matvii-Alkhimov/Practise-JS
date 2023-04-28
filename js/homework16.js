
// 1

class Animal {
    constructor (name, age) {
        this.#name = name;
        this.#age = age;
    }

    getAge() {
        return (this.#age);
    }
}

// 2

class Dog extends Animal {
    constructor (name, age, legsCount) {
        super(name, age);
        this.legsCount = legsCount;
    }

    bark() {
        return "Bark";
    }
}

// 3

class GuideDog extends Dog {
    constructor(name, age, legsCount, isTrained) {
        super(name, age, legsCount);
        this.#isTrained = isTrained;
    }

    leadBlind() {
        return "Following the guide dog";
    }

    getInfo() {
        return `Name - ${this.#name}, age - ${this.#age}, legs count - ${this.legsCount}, is trained - ${this.isTrained}`;
    }
}

// 4

const dog1 = new GuideDog("Jack", 5, 4, true);

console.log(dog1.getInfo());
console.log(dog1.legsCount);
console.log(dog1.bark());