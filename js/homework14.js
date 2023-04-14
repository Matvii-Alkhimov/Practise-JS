

const elements = {
    counterEl: document.querySelector("#counter"),
    minusButtonEl: document.querySelector("#counter > button[data-action='decrement']"),
    plusButtonEl: document.querySelector("#counter > button[data-action='increment']"),
    scoreSpanEl: document.querySelector("#value"),
    nameInputEl: document.querySelector("#name-input"),
    nameTitleEl: document.querySelector("#name-input + h1"),
    nameSpanEl: document.querySelector("#name-output"),
    validationInputEl: document.querySelector("#validation-input"),
    sizeControlEl: document.querySelector("#font-size-control"),
    changeSizeText: document.querySelector("#text"),
    quantityInputEl: document.querySelector("#controls > input"),
    createButtonEl: document.querySelector("#controls > button[data-action='render']"),
    deleteButtonEl: document.querySelector("#controls > button[data-action='destroy']"),
    boxesContainer: document.querySelector("#boxes"),

}

// 4

// let score = 0;

const plusPointFunction = () => {
    // score += 1;
    // elements.scoreSpanEl.textContent = score;
    elements.scoreSpanEl.textContent = Number(elements.scoreSpanEl.textContent) + 1;
}

const minusPointFunction = () => {
    // score -= 1;
    // elements.scoreSpanEl.textContent = score;
    elements.scoreSpanEl.textContent -= 1;
}

elements.plusButtonEl.addEventListener("click", plusPointFunction);
elements.minusButtonEl.addEventListener("click", minusPointFunction);

// 5

const changeNameFunction = (event) => {
    elements.nameSpanEl.textContent = event.currentTarget.value;
}

elements.nameInputEl.addEventListener("input", changeNameFunction);

// 6

const checkDataLengthFunction = (event) => {
    if (event.currentTarget.value.length === Number(elements.validationInputEl.dataset.length)) {
        elements.validationInputEl.classList.add("valid");
    } else {
        elements.validationInputEl.classList.add("invalid");
    }
}

const changeDataLengthFunction = () => {
    elements.validationInputEl.classList.remove("valid");
    elements.validationInputEl.classList.remove("invalid");
}

elements.validationInputEl.addEventListener("blur", checkDataLengthFunction);
elements.validationInputEl.addEventListener("focus", changeDataLengthFunction);

// 7

const changeSizeFunction = (event) => {
    elements.changeSizeText.style.fontSize = `${event.currentTarget.value}px`;
}

elements.sizeControlEl.addEventListener("input", changeSizeFunction);

// 8

const createBoxesFunction = () => {
    if (elements.quantityInputEl.value > 100) {
        elements.quantityInputEl.value = "";
        return alert("Sorry, the max quantity of containers that will be created is 100. Please, try again.");
    }
    let boxSize = 30;
    
    for (let i = 1; i <= elements.quantityInputEl.value; i += 1) {
        const newBox = document.createElement("div");
        newBox.classList.add("newBox");
        newBox.style.width = `${boxSize}px`;
        newBox.style.height = `${boxSize}px`;
        newBox.style.backgroundColor = `rgb(${Math.round(Math.random() * (255 - 0) + 0)}, 
        ${Math.round(Math.random() * (255 - 0) + 0)}, 
        ${Math.round(Math.random() * (255 - 0) + 0)})`;
        elements.boxesContainer.append(newBox);
        boxSize += 10;
    }
    elements.quantityInputEl.value = "";
}

const deleteBoxesFunction = () => {
    elements.boxesContainer.innerHTML = '';

}

elements.createButtonEl.addEventListener("click", createBoxesFunction);
elements.deleteButtonEl.addEventListener("click", deleteBoxesFunction);