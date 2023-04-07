const tags = {
    containerEl: document.querySelector(".document"),
    changeColorButtonEl: document.querySelector(".change-color-button"),
    messageButtonEl: document.querySelector(".message-button"),
    loginContainerEl: document.querySelector(".login-container"),
    createPasswordButtonEl: document.querySelector(".create-password"),
    logInButtonEl: document.querySelector(".login-button"),
    formEl: document.querySelector(".password-form"),
    submitButtonEl: document.querySelector(".submit-button"),
    nameInputEl: document.querySelector(".name-input"),
    passwordInputEl: document.querySelector(".password-input"),
}

// 1


const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

const changeColorFunction = () => {
    const randomNumber = Math.round(Math.random() * ((colors.length - 1) - 0 ) + 0);
    tags.changeColorButtonEl.style.backgroundColor = colors[randomNumber];
    console.log (randomNumber);
}

tags.changeColorButtonEl.addEventListener("click", changeColorFunction);

// 2

const messageFunction = () => {
    alert("Hello World!")
}

tags.messageButtonEl.addEventListener("click", messageFunction);

// 3

tags.passwordInputEl.name = "password";
tags.nameInputEl.name = "name";

let password = "";

const createPasswordFunction = () => {
    const passwordMessage = prompt("Enter new password");
    if (passwordMessage.length >= 8 && passwordMessage.length <= 20) {
        password = passwordMessage;
        alert("New password succesfully created!");
    } else if (passwordMessage.length < 8) {
        alert("New password is too short! Please try again!");
    } else if (passwordMessage.length > 20) {
        alert("New password is too long! Please try again!");
    }
    console.log(password);
}

tags.createPasswordButtonEl.addEventListener("click", createPasswordFunction);

const logInFunction = () => {
    if (password === "") {
        alert("You need to create a password!")
        return
    }
    tags.loginContainerEl.classList.toggle("isNotActive");
}

tags.logInButtonEl.addEventListener("click", logInFunction);

const submitFunction = (event) => {
    if (event.currentTarget.elements.password.value === password) {
        alert(`Welcome, ${event.currentTarget.elements.name.value}.`);
        tags.nameInputEl.value = "";
        tags.passwordInputEl.value = '';
        tags.loginContainerEl.classList.toggle("isNotActive");
    } else {
        alert("Your password is incorrect! Please, try again!");
        event.currentTarget.elements.password.value = "";
    }
}

tags.formEl.addEventListener("submit", submitFunction)

