import "babel-polyfill";

const cors_api_host = "https://cors-anywhere.herokuapp.com/";
const parentElement = document.querySelector(".content-container");
const submitButton = document.querySelector(".search-submit");
const inputFieldResult = document.querySelector(".ingredients-input");

let searchIngredient = "";
submitButton.addEventListener("click", () => {
  searchIngredient = inputFieldResult.value;
  parentElement.innerHTML = "";

  responding(searchIngredient).then(returned => {
    returned.forEach(recipe => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      parentElement.appendChild(cardElement);

      const cardImageSection = document.createElement("div");
      cardImageSection.classList.add("card__image");
      cardElement.appendChild(cardImageSection);

      const cardContent = document.createElement("div");
      cardContent.classList.add("card__content");
      cardElement.appendChild(cardContent);

      const imageContent = document.createElement("img");
      imageContent.classList.add("card__thumbnail");
      imageContent.src = recipe.thumbnail;
      cardImageSection.appendChild(imageContent);

      const titleContent = document.createElement("div");
      titleContent.classList.add("card__text");
      titleContent.innerHTML = recipe.title;
      cardContent.appendChild(titleContent);

      const badgeContainer = document.createElement("div");
      badgeContainer.classList.add("badge__container");
      cardContent.appendChild(badgeContainer);

      const badgesSeparated = recipe.ingredients.split(",");
      badgesSeparated.forEach(badge => {
        const badgeContent = document.createElement("div");
        badgeContent.classList.add("card__content__badge");
        badgeContent.innerHTML = badge;
        badgeContainer.appendChild(badgeContent);
      });
      const detailButton = document.createElement("button");
      detailButton.classList.add("card__detail");
      detailButton.innerHTML = "see more";
      cardContent.appendChild(detailButton);
    });
  });
});

async function responding(queryInput) {
  let response = await fetch(
    `${cors_api_host}http://www.recipepuppy.com/api/?i=${queryInput}`
  );
  let data = await response.json();
  return data.results;
}

responding(searchIngredient).then(returned => {
  returned.forEach(recipe => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    parentElement.appendChild(cardElement);

    const cardImageSection = document.createElement("div");
    cardImageSection.classList.add("card__image");
    cardElement.appendChild(cardImageSection);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card__content");
    cardElement.appendChild(cardContent);

    const imageContent = document.createElement("img");
    imageContent.classList.add("card__thumbnail");
    imageContent.src = recipe.thumbnail;
    cardImageSection.appendChild(imageContent);

    const titleContent = document.createElement("div");
    titleContent.classList.add("card__text");
    titleContent.innerHTML = recipe.title;
    cardContent.appendChild(titleContent);

    const badgeContainer = document.createElement("div");
    badgeContainer.classList.add("badge__container");
    cardContent.appendChild(badgeContainer);

    const badgesSeparated = recipe.ingredients.split(",");
    badgesSeparated.forEach(badge => {
      const badgeContent = document.createElement("div");
      badgeContent.classList.add("card__content__badge");
      badgeContent.innerHTML = badge;
      badgeContainer.appendChild(badgeContent);
    });
    const detailButton = document.createElement("button");
    detailButton.classList.add("card__detail");
    detailButton.innerHTML = "see more";
    cardContent.appendChild(detailButton);
  });
});
