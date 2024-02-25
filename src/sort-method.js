import { convertRecipe } from './recipe-conversion.js';
import { angleBetween } from './linear-algebra.js';
import { all_recipes } from './all-recipes.js';


function sortRecipes(searchVector) {
    return all_recipes.sort(function (a, b) { return (angleBetween(convertRecipe(a), searchVector)) - (angleBetween(convertRecipe(b), searchVector))});
}

export {sortRecipes};

/*
console.log(sortRecipes(
    [1, 1, 4, 4, 34, 2, 23, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 3, 3, 3, 2, 5, 7]
));*/