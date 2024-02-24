import all_recipes from './recipe.js';
import angleBetween from './linear-algebra.js';

function sortRecipes(searchVector) {
    all_recipes.sort(angleBetween(a, searchVector));
}

console.log(sortRecipes(
    [1, 1, 4, 4, 34, 2, 23, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 3, 3, 3, 2, 5, 7]
))