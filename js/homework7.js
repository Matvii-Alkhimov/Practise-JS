// 1

const user = {

}

user.UserName = "Matvii";
user.showUserName = function() {
    return this.UserName;
}

alert(user.showUserName());

user.age = 0;

user.updateAge = function() {
    let conf = confirm(`Ваш вік зараз - ${this.age}. Бажаєте його збільшити на один рік?`);
    while (conf === true) {
        this.age += 1;
        conf = confirm(`Ваш вік було збільшено на один. Ваш вік зараз - ${this.age}. Бажаєте його збільшити на один рік?`);
    }
    
    return `Ваш остаточний вік - ${this.age}`;
}

alert(user.updateAge());

console.log(user);

// 2

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;

const salariesFunction = function() {
    const wages = Object.values(salaries);
    for (const wage of wages) {
        sum += wage;
    }
    return sum;
}

console.log(salariesFunction());

// 3

const calculator = {
    read: function() {
        let valA = prompt("Введіть перше число");
        let valB = prompt("Введіть друге число");

        this.a = Number(valA);
        this.b = Number(valB);

        return `Введені числа : ${this.a} та ${this.b}`;
    },
    sum: function() {
        this.numbersSummary = this.a + this.b;
        return `Сума двох введених чисел - ${this.numbersSummary}`;
    },
    mult: function() {
        this.numbersMult = this.a * this.b;

        return `Добуток двох введених чисел - ${this.numbersMult}`;
    }
}

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mult());

// 4

const cafe= {
    name: "Republic",
    width: 200,
    height: 300,
    personal:5,
    hr: true
}

for (const element of Object.entries(cafe)) {
    console.log(element);
}

const S = cafe["width"] * cafe["height"];
console.log(S);