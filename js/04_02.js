

const tags = {
    buttonsEl: document.querySelector(".article"),
    titleEl: document.querySelector(".btn-title"),
    textEl: document.querySelector(".btn-text"),
    linkEl: document.querySelector(".btn-link"),
    imageEl: document.querySelector(".btn-image"),
    containerEl: document.querySelector(".input-container"),
    labelEl: document.querySelector(".label"),
    inputEl: document.querySelector(".input"),
    bonusContainerEl: document.querySelector(".bonus-input-container"),
    bonusInputEl: document.querySelector(".bonus-input"),
    bonusLabelEl: document.querySelector(".bonus-label"),
    buttonOkEl: document.querySelector(".ok-button"),
    buttonCloseEl: document.querySelector(".close-button"),
    contentEl: document.querySelector(".content"),
    tagNeeded: "",
    newEl: "",
}

const createEl = () => {

    tags.newEl = document.createElement(tags.tagNeeded);
    tags.newEl.textContent = tags.inputEl.value;
    
    console.log(tags.newEl);
    if (tags.tagNeeded === "a") {
        tags.newEl.href = tags.bonusInputEl.value;
    } else if (tags.tagNeeded === "img") {
        tags.newEl.src = tags.bonusInputEl.value;
        tags.newEl.alt = tags.inputEl.value;}
}

const buttonClose = () => {
    tags.containerEl.classList.remove("isActive");
    tags.bonusContainerEl.classList.remove("isActive");
}

const addEl = () => {
    createEl();
    
    if (tags.newEl.textContent !== "") {
        tags.contentEl.append(tags.newEl);
    }
    tags.inputEl.value = "";
    tags.containerEl.classList.remove("isActive");
    tags.bonusContainerEl.classList.remove("isActive");

}



tags.titleEl.addEventListener("click", () => {
    tags.tagNeeded = "h1";
    tags.bonusContainerEl.classList.remove("isActive");
    tags.containerEl.classList.add("isActive");
    tags.labelEl.textContent = "Write a text of a new title";
    tags.buttonOkEl.addEventListener("click", addEl);
    tags.buttonCloseEl.addEventListener("click", buttonClose);

});

tags.textEl.addEventListener("click", () => {
    tags.tagNeeded = "p";
    tags.bonusContainerEl.classList.remove("isActive");
    tags.containerEl.classList.add("isActive");
    tags.labelEl.textContent = "Write a text of text";
    tags.buttonOkEl.addEventListener("click", addEl);
    tags.buttonCloseEl.addEventListener("click", buttonClose);

});

tags.linkEl.addEventListener("click", () => {
    tags.tagNeeded = "a";
    tags.bonusContainerEl.classList.remove("isActive");
    tags.containerEl.classList.add("isActive");
    tags.bonusContainerEl.classList.add("isActive");
    tags.labelEl.textContent = "Write a text of a link";
    tags.bonusLabelEl.textContent = "Put a link"
    tags.buttonOkEl.addEventListener("click", addEl);
    tags.buttonCloseEl.addEventListener("click", buttonClose);

});

tags.imageEl.addEventListener("click", () => {
    tags.tagNeeded = "img";
    tags.containerEl.classList.add("isActive");
    tags.bonusContainerEl.classList.add("isActive");
    tags.labelEl.textContent = "Write the name of image";
    tags.bonusLabelEl.textContent = "Put a link of image";
    tags.buttonOkEl.addEventListener("click", addEl);
    tags.buttonCloseEl.addEventListener("click", buttonClose);
});