import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const recipesContainer = document.querySelector('.recipescontainer');
    console.log('recipesContainer:', recipesContainer);

    const createRecipeElement = (recipe) => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        
        recipeElement.innerHTML = `
            <section class="recipe-box">
            <img src="${recipe.image}" width="300px" alt="${recipe.name}">
            <h3>${recipe.tags}</h3>
            <h2>${recipe.name}</h2><br>
            <p>${recipe.description}</p>
        `;
        
        return recipeElement;
    }

    recipes.forEach(recipe => {
        console.log('Creating recipe element for:', recipe.name);
        const recipeElement = createRecipeElement(recipe);
        recipesContainer.appendChild(recipeElement);
    });
});
