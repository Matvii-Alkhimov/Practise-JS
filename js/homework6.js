// 1

const hello1 = function() {
    return "Привіт Javascript";
}

console.log(hello1());

// 2

const hello2 = function(name) {
    console.log(`Привіт, ${name}!`);
}

hello2("Василь");

// 3

const mul = function(m, n) {
    console.log(m + n);
    console.log(m * n);
    console.log(m - n);
}

mul(345, 564);

// 4

const myNewArrowFunction = (...rest) => {
    console.log(rest);
}

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// 5


// 5. Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)


const myAverageScore = (arr) => {
    let totalScore = 0;
    for (const element of arr) {
    totalScore += element;
   } 
   totalScore = totalScore / arr.length;
   console.log(totalScore)
   if ( totalScore <= 100 && totalScore >= 91) {
    return "My average score: A";
   } else if ( totalScore <= 90 && totalScore >= 81) {
    return "My average score: B";
   } else if ( totalScore <= 80 && totalScore >= 71) {
    return "My average score: C";
   } else if ( totalScore <= 70) {
    return "My average score: D";
   }
}

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));