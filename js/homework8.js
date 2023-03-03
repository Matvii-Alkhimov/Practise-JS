// 1


const players = [

    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  
  ];
  
  
const playerIdToUpdate = 'player-3';

players.map((player) => player["id"] === playerIdToUpdate ? player["timePlayed"] += 100 : player["timePlayed"] = player["timePlayed"] );

console.log(players);


// 2





const cart = {
    items: [],
    getItems() {},
    add(product) {
        const newProduct = {
            ...product,
            quantity: 1,
        }
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }
        this.items.push(newProduct)
    },
    remove(product) {

        for (const item of this.items) {
            if (item.name === product.name && item.quantity === 1) {
                this.items.splice(this.items.indexOf(item), 1);
                return this.items;
            } else if (item.name === product.name && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    },
    clear() {
        for (const item of this.items) {
            this.items.pop();
        } return this.items;
    },
    countTotalPrice() {
        let totalPrise = 0;
        for (const item of this.items) {
            totalPrise += item.price;
        }
        return `Total prise - ${totalPrise}.`
    },
    increaseQuantity(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }
    },
    decreaseQuantity(product) {
        for (const item of this.items) {
            if (item.name === product.name && item.quantity === 1) {
                this.items.splice(this.items.indexOf(item), 1);
                return this.items;
            } else if (item.name === product.name && item.quantity > 1) {
                item.quantity -= 1;
                return;
            }
        }
    },
  };


cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍎', price: 50 });
cart.remove({ name: '🍋', price: 60 });
cart.remove({ name: '🍎', price: 50 });
cart.clear();
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.increaseQuantity({ name: '🍎', price: 50 });
cart.increaseQuantity({ name: '🍋', price: 60 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍓', price: 110 });
cart.decreaseQuantity({ name: '🍓', price: 110 });


console.log(cart.items);
console.log(cart.countTotalPrice());

// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }