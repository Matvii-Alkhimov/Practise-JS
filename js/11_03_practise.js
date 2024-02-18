
const elements = {
    inputNameEl: document.querySelector(".js-input"),
    inputLicenceEl: document.querySelector(".js-license"),
    submitButtonEl: document.querySelector(".js-button"),
    spanEl: document.querySelector(".js-button > span"),
    clearButtonEl: document.querySelector(".js-clear"),
    outputEl: document.querySelector(".js-output"),
}

function onFocus(event) {
    console.log(event.currentTarget.value);
    elements.spanEl.textContent = elements.inputNameEl.value;
}

elements.inputNameEl.addEventListener("input", onFocus)

elements.inputLicenceEl.addEventListener("change", () => {
    event.currentTarget.checked 
    ? elements.submitButtonEl.disabled = false 
    : elements.submitButtonEl.disabled = true;
})

window.addEventListener("keydown", (event) => {
    console.log(event.code);
    console.log(event.key);

    elements.outputEl.textContent += event.key;
})

elements.clearButtonEl.addEventListener("click", (event) => {
    elements.outputEl.textContent = ""
})