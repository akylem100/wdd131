import recipes from './recipes.mjs';

document.querySelector('#randomrecipebtn').addEventListener('click', (event) => {
    event.preventDefault();

    var randomNumber = Math.floor(Math.random() * recipes.length);
    var randomrecipe = recipes[randomNumber];

    const existingRecipeBox = document.querySelector('.recipe-box');
    if (existingRecipeBox) {
        existingRecipeBox.remove();
    }

    const newRecipeBox = document.createElement('div');
    newRecipeBox.classList.add('recipe-box');
    newRecipeBox.innerHTML = `
        <img src="${randomrecipe.image}" width="300px" alt="${randomrecipe.name}">
        <h3>${randomrecipe.tags}</h3>
        <h2>${randomrecipe.name}</h2><br>
        <p>${randomrecipe.description}</p>
        <h1>Cook time: ${randomrecipe.cookTime}</h1>
        <h2>${ratingTemplate(randomrecipe.rating)}</h2>
    `;

    document.querySelector('.recipescontainer').appendChild(newRecipeBox);
});

function ratingTemplate(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// document.addEventListener('DOMContentLoaded', () => {
//     const recipesContainer = document.querySelector('.recipescontainer');
//     console.log('recipesContainer:', recipesContainer);

//     const createRecipeElement = (recipe) => {
//         const recipeElement = document.createElement('div');
//         recipeElement.classList.add('recipe');
        
//         recipeElement.innerHTML = `
//             <section class="recipe-box">
//             <img src="${recipe.image}" width="300px" alt="${recipe.name}">
//             <h3>${recipe.tags}</h3>
//             <h2>${recipe.name}</h2><br>
//             <p>${recipe.description}</p>
//         `;
        
//         return recipeElement;
//     }

//     recipes.forEach(recipe => {
//         console.log('Creating recipe element for:', recipe.name);
//         const recipeElement = createRecipeElement(recipe);
//         recipesContainer.appendChild(recipeElement);
//     });
// });
