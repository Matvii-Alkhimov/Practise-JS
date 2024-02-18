// Напиши гру "Натисни правильну клавішу", використовуючи події keydown та keypress.
// Створити елементи для відображення повідомлення про стан гри та поточної клавіші, яку потрібно натиснути.
// Створити масив keys, що містить десять можливих клавіш, які можуть бути натиснуті.
// Створити змінну currentKeyIndex, що зберігає індекс поточної клавіші, яку потрібно натиснути.
// Встановити текст елементу з id="key" на поточну клавішу, яку потрібно натиснути.
// Створити обробник події keydown, що перевіряє, чи була натиснута правильна клавіша. Якщо була натиснута правильна клавіша, то збільшити currentKeyIndex на 1, встановити нову поточну клавішу та оновити текст елементу з id="key". Якщо була натиснута неправильна клавіша, то повідомити користувача про помилку.
// Створити обробник події keypress, що запобігає дії за замовчуванням для уникнення несподіваного поведінки сторінки під час гри.
// Додати кнопку "Нова гра", що оновлює гру з новим поточним ключем


const elements = {
    startContainerEl: document.querySelector(".start-container"),
    gameContainerEl: document.querySelector(".game-container"),
    startButtonEl: document.querySelector(".start-button"),
    gameContainerEl: document.querySelector(".game-container"),
    keySpanEl: document.querySelector(".key-needed"),
    scoreEl: document.querySelector(".score"),
    mistakesEl: document.querySelector(".mistakes"),
}

const keys = ["W", "R", "B", "C", "K", "L", "P", "S", "D", "F", "G", "H", "M", "X", "Z", "A", "Q"];

let totalScore = 0;
let mistakes = 0;

elements.scoreEl.textContent = `Score: ${totalScore}`;
elements.mistakesEl.textContent = `Mistakes: ${mistakes}`;

const checkAnswerFunction = (event) => {
    console.log(elements.keySpanEl.textContent);
    if (`${event.key.toUpperCase()}` === elements.keySpanEl.textContent) {
        alert("Correct!");
        elements.keySpanEl.textContent = keys[Math.round(Math.random() * ((keys.length - 1) - 0) + 0)];
        totalScore += 1;
        elements.scoreEl.textContent = `Score: ${totalScore}`;
    } else {
        alert("Not correct!");
        elements.keySpanEl.textContent = keys[Math.round(Math.random() * ((keys.length - 1) - 0) + 0)];
        mistakes += 1;
        elements.mistakesEl.textContent = `Mistakes: ${mistakes}`;
    }
    if (mistakes === 3) {
        alert(`You lost! Your total score is ${totalScore}`);
        elements.gameContainerEl.classList.toggle("isNotActive");
        elements.startContainerEl.classList.toggle("isNotActive");
        totalScore = 0;
        mistakes = 0;
    }
}

const startGameFunction = () => {
    elements.gameContainerEl.classList.toggle("isNotActive");
    elements.startContainerEl.classList.toggle("isNotActive");
    elements.keySpanEl.textContent = keys[Math.round(Math.random() * ((keys.length - 1) - 0) + 0)];
    window.addEventListener("keydown", checkAnswerFunction)
}

elements.startButtonEl.addEventListener("click", startGameFunction);
