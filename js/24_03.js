// const user = {
//     name: "Emily",
//     age: 32,
//     city: "Los Angeles",
//     occupation: "Marketing Manager"
// }

// const article = document.querySelector("article");
// article.classList.add("article");

// const title = document.querySelector("h1");
// title.textContent = user.name;
// title.classList.add("title")

// const age = document.querySelector("h1 + p");
// age.textContent = user.age;

// const city = document.querySelector("a");
// city.textContent = user.city;
// city.classList.add("link");

// const occupation = document.querySelector("a + p");
// occupation.textContent = user.occupation;


// const users = [
//     {
//       name: "John",
//       age: 25,
//       city: "New York",
//       occupation: "Software Engineer"
//     },
//     {
//       name: "Emily",
//       age: 32,
//       city: "Los Angeles",
//       occupation: "Marketing Manager"
//     }
// ]

// const createMarkUp = function(users) {
//     return users.map((user) => {
//     const article = document.querySelector("article");
//     article.classList.add("article");

//     const title = document.querySelector("h1");
//     title.textContent = user.name;
//     title.classList.add("title")

//     const age = document.querySelector("h1 + p");
//     age.textContent = user.age;

//     const city = document.querySelector("a");
//     city.textContent = user.city;
//     city.classList.add("link");

//     const occupation = document.querySelector("a + p");
//     occupation.textContent = user.occupation;

// });
// }

// console.log(createMarkUp(users));


const tags = {
  listEl : document.querySelector(".site-nav"),
  itemsEl : document.querySelectorAll(".site-nav__item"),
}

console.log(tags);

const titleEl = document.createElement("h1");

tags.listEl.before(titleEl);

titleEl.textContent = "Title";


const imageEl = document.createElement("img");

imageEl.src = "https://supercell.com/_next/static/media/games_thumbnail_brawlstars.5cd76330.jpg";
imageEl.alt = "Brawl Stars";
imageEl.width = "500";
imageEl.height = "400";

tags.listEl.after(imageEl);



const itemEl = document.createElement("li");
itemEl.classList.add("site-nav__item");

const linkEl = document.createElement("a");

linkEl.classList.add("site-nav__link");
linkEl.src = "";
linkEl.textContent = "link";

itemEl.appendChild(linkEl);
tags.listEl.appendChild(itemEl);


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerEl = document.querySelector(".js-color-picker")

// const option = colorPickerOptions[0];

// const btnEl = document.createElement("button");
// btnEl.classList.add("color-picker__option");
// btnEl.textContent = option.label;
// btnEl.style.backgroundColor = option.color;
// btnEl.type = "button";

// colorPickerEl.prepend(btnEl);


const btnEl = colorPickerOptions.map((option) => {
  const newBtn = document.createElement("button");
  newBtn.classList.add("color-picker__option");
  newBtn.textContent = option.label;
  newBtn.style.backgroundColor = option.color;
  newBtn.type = "button";
  colorPickerEl.append(newBtn);

  return newBtn;
})

console.log(btnEl);


