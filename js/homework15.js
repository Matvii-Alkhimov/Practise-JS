
// 1

class Account {
    constructor (obj) {
        this.login = obj.login
        this.email = obj.email
    }
    getInfo () {
        return console.log(`Login: ${this.login}, Email: ${this.email}`);
    }
}

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo();

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo();

// 2

class User {
    constructor (obj) {
        this.name = obj.name
        this.age = obj.age
        this.followers = obj.followers
    }
    getInfo () {
        return console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    }
}

const mango2 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
  });
  
  mango2.getInfo();
  
  const poly2 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });
  
  poly2.getInfo();

// 3

class Storage {
    constructor(arr) {
        this.items = Array.from(arr);
    }
    getItems() {
        return this.items
    }
    addItem(item) {
        this.items = this.items.includes(item) ? this.items : [...this.items, item];
    }
    removeItem(item) {
        const neededIndex = this.items.indexOf(item)
        this.items.splice(neededIndex, 1);
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
  const items = storage.getItems();
  console.table(items);
  
  storage.addItem('Дроїд');
  console.table(storage.items);
  
  storage.removeItem('Пролонгер');
  console.table(storage.items);

// 4

class StringBuilder {
    constructor(value) {
        this.__value = value;
    }
    get value() {
        return this.__value;
    }
    append(str) {
        this.__value += str;
    }
    prepend(str) {
        this.__value = str + this.__value;
    }
    pad(str) {
        this.__value = str + this.__value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
