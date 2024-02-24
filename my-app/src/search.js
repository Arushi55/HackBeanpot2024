import { all_recipes_vectors } from './recipe-conversion.js';
import { angleBetween } from './linear-algebra.js';


function sortRecipes(searchVector) {
    return all_recipes_vectors.sort(function (a, b) { return (angleBetween(a, searchVector)) - (angleBetween(b, searchVector)) }
    );
}
/*
console.log(sortRecipes(
    [1, 1, 4, 4, 34, 2, 23, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 3, 3, 3, 2, 5, 7]
));*/