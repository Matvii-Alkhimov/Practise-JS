// 1

const pageTitle = document.querySelector(".page-title");
pageTitle.textContent = "Новий заголовок";

// 2

const textParagraphEl = document.querySelector(".paragraph");
textParagraphEl.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat nemo veritatis quasi eius eum aliquid, nobis dolore nisi, magnam eaque iusto, necessitatibus atque laborum quam tempora ducimus dicta ipsam."

// 3

const listEl = document.querySelectorAll(".list");
console.log(listEl);

// 4

const imageEl = document.querySelector(".image");
imageEl.src = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"

// 5

const titleList = document.querySelectorAll(".section-title");

console.log(titleList);

const lastIndex = titleList.length - 1;

titleList[lastIndex].textContent = "Новий заголовок";

// 6

const tableCellList = document.querySelectorAll(".table-cell");
tableCellList[tableCellList.length - 1].textContent = "Оновлене значення";

// 7

const footerTextEl = document.querySelectorAll(".footer-text");

for (const element of footerTextEl) {
    element.classList.add("highlight");
}

// 8

const navigationEl = document.querySelector(".navigation");
navigationEl.style.backgroundColor = "lightblue";







