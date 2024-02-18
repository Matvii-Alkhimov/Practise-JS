

const siteNavList = document.querySelector(".site-nav__link");

const title = document.querySelector(".title");
const text = document.querySelector(".text");


console.log(title);
console.log(text);

siteNavList.alt = "gufydj";
console.log(siteNavList.alt)

siteNavList.textContent = "gdrtyui";

const image = document.querySelector(".image");

image.src = "https://images.pexels.com/photos/13709622/pexels-photo-13709622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
image.alt = "flowers";

console.log(image)

image.src = "https://images.pexels.com/photos/6071/watch-flower-pink-silver.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

text.textContent = "YHTRWEGTYHJUKIOLKIUJYHTGRYTHUJIKO"

const sectionTitleEl = document.querySelector(".section-title");
const sectionTextEl = document.querySelector(".paragraph");
const sectionItemEl = document.querySelector(".list-item");

sectionTitleEl.textContent = "New Title";

(sectionTextEl.classList.contains("paragraph") ? sectionTextEl.classList.replace("paragraph", "text") : sectionTextEl.classList = "paragraph");

const listEl = document.querySelectorAll(".list-item");
listEl[1].classList.add("active")