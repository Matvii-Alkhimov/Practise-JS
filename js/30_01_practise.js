
const elements = {
    createButtonEl: document.querySelector(".create-button"),
    createFormEl: document.querySelector(".create-form"),
    okButtonEl: document.querySelector(".ok-button"),
    toDoListEl: document.querySelector(".to-do-list"),
    newElsArr: [],
    allDeleteButtons: [],
    
}


const deleteItemFunction = (event) => {
    event.target.classList.add("pickedButton");
    const neededIndex = elements.allDeleteButtons.findIndex((item) => item.classList.contains("pickedButton"));
    event.target.classList.remove("pickedButton");
    elements.newElsArr[neededIndex].remove();

}


const createToDoItemFunction = (event) => {
    event.preventDefault()
    
    const newEl = document.createElement("li");
    newEl.textContent = event.currentTarget.elements.input.value;
    newEl.classList.add("to-do-item");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    // const deleteIcon = document.createElement("svg");
    // deleteIcon.classList.add("delete-icon")
    // deleteIcon.innerHTML = `<use href="..//images/images.svg#icon-trash" ></use>`;
    // deleteButton.innerHTML = `
    // <svg class="delete-icon">
    //     
    // </svg>`;
    // deleteButton.prepend(deleteIcon);
    deleteButton.addEventListener("click", deleteItemFunction);

    elements.newElsArr.push(newEl);
    elements.allDeleteButtons.push(deleteButton);

    console.log(elements.newElsArr);
    console.log(elements.allDeleteButtons);

    newEl.append(deleteButton);
    elements.toDoListEl.prepend(newEl);

    event.currentTarget.elements.input.value = "";
    elements.createFormEl.classList.add("isNotActive");
    elements.createFormEl.removeEventListener("click", createToDoItemFunction);
}

const openCreateFormFunction = () => {
    elements.createFormEl.classList.remove("isNotActive");
    elements.createFormEl.addEventListener("submit", createToDoItemFunction);
}

elements.createButtonEl.addEventListener("click", openCreateFormFunction);




