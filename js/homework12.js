
// 1

const itemsEl = document.querySelectorAll("#categories > .item");

const findCategoriesFunction = function(array) {
    const trueArray = Array.from(array);

    trueArray.map((item) => console.log(`Name of category - ${item.querySelector("h2").textContent}. 
    The quantity of elements : ${item.querySelectorAll("li").length}`))
}

findCategoriesFunction(itemsEl);

// 2

const ingredientsListEl = document.querySelector("#ingredients")

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

ingredients.map((ingredient) => {
    const newEl = document.createElement("li");
    newEl.textContent = ingredient;

    ingredientsListEl.prepend(newEl);
});

// 3

const galleryListEl = document.querySelector("#gallery");

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
];

const addImagesFunction = function(array) {    
    array.map((item) => {
        galleryListEl.insertAdjacentHTML
        ("afterbegin", `<li><img src="${item.url}" alt="${item.alt}" ></img></li>`)
    });
}

addImagesFunction(images)