// 1

for (let i = 1; i <= 10; i += 1) {
    console.log(i);
}

// 2

for (let w = 1; w <= 10; w += 1) {

    if ( w % 2 === 0) {
        console.log(`${w} - парне`);
    } else {
        console.log(`${w} - непарне`);
    }
}

// 3

let num = 20;

while (num < 28) {
    num += 1;
    console.log(num);
}

// 4

let name = prompt("Введіть ім'я вашого улюбленого героя");

while (name.length < 6) {
    console.log(name);
    name = prompt("Введіть ім'я вашого улюбленого героя");

    
} if (name.length >= 6) {
        alert(`Ім'я ${name} занадто велике`);
    }
