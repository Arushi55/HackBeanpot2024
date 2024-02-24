import all_recipes from './recipe.js';
import angleBetween from './linear-algebra.js';

function sortRecipes(searchVector) {
    all_recipes.sort(angleBetween(a, searchVector));
}
