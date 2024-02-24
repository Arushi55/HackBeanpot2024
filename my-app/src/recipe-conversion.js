import {angleBetween} from './linear-algebra.js';

export const cake_recipe = {
    name: 'Cake',
    baking_powder_tsp: 1.75,
    baking_soda_tsp: 0,
    brown_sugar_cups: 0,
    butter_tbsp: 4,
    choco_chips_cups: 0,
    cinnamon_tsp: 0,
    cream_tartar_tsp: 0,
    cocoa_powder_cups: 0,
    cornstarch_tbsp: 0,
    eggs_num: 2,
    flour_cups: 1.5,
    ginger_tsp: 0,
    honey_tbsp: 0,
    milk_cups: .5,
    nutmeg_tsp: 0,
    nuts_cups: 0,
    oats_cups: 0,
    oil_tbsp: 0,
    raisins_cups: 0,
    salt_tsp: 0,
    sugar_cups: 1,
    vanilla_tsp: 2,
    water_cups: 0,
    steps: "1. Gather all ingredients.\
    2. Preheat the oven to 350 degrees F (175 degrees C). Grease and flour a 9-inch square cake pan. \
    3. Cream sugar and butter together in a mixing bowl. Add eggs, one at a time, beating briefly after each addition. Mix in vanilla. \
    4. Combine flour and baking powder in a separate bowl. Add to the wet ingredients and mix well. Add milk and stir until smooth. \
    5. Pour batter into the prepared cake pan. \
    6. Bake in the preheated oven until the top springs back when lightly touched, 30 to 40 minutes. \
    7. Remove from the oven and cool completely."
  };

  export const cupcake_recipe = {
    name: 'Cupcake',
    baking_powder_tsp: 3,
    baking_soda_tsp: 0,
    brown_sugar_cups: 0,
    butter_tbsp: 0,
    choco_chips_cups: 0,
    cinnamon_tsp: 0,
    cream_tartar_tsp: 0,
    cocoa_powder_cups: 0,
    cornstarch_tbsp: 0,
    eggs_num: 2,
    flour_cups: 2.5,
    ginger_tsp: 0,
    honey_tbsp: 0,
    milk_cups: .5,
    nutmeg_tsp: 0,
    nuts_cups: 0,
    oats_cups: 0,
    oil_tbsp: 8,
    raisins_cups: 0,
    salt_tsp: 1,
    sugar_cups: 2,
    vanilla_tsp: 2,
    water_cups: 1,
    steps: "1. Preheat oven to 350°F (176°C) and prepare a cupcake pan with liners. \
    2.  Add the flour, sugar, baking powder and salt to a large mixer bowl and combine. Set aside. \
    3. Add the milk, vegetable oil, vanilla extract and eggs to a medium sized bowl and combine. \
    4. Add the wet ingredients to the dry ingredients and beat until well combined. \
    5. Slowly add the water to the batter and mix on low speed until well combined. Scrape down the sides of the bowl as needed to make sure everything is well combined. Please note that the batter will be very thin.\
    6. Fill the cupcake liners about half way and bake for 15-17 minutes, or until a toothpick comes out with a few moist crumbs. \
    7. Remove the cupcakes from oven and allow to cool for 2 minutes, then remove to a cooling rack to finish cooling."
  };

  export const all_recipes = [cake_recipe, cupcake_recipe];


function convertRecipe(recipe) {
    return [recipe.baking_powder_tsp, recipe.baking_soda_tsp, recipe.brown_sugar_cups, recipe.butter_tbsp, recipe.choco_chips_cups,
      recipe.cinnamon_tsp, recipe.cream_tartar_tsp, recipe.cocoa_powder_cups, recipe.cornstarch_tbsp, recipe.eggs_num, recipe.flour_cups,
      recipe.ginger_tsp, recipe.honey_tbsp, recipe.milk_cups, recipe.nutmeg_tsp, recipe.nuts_cups, recipe.oats_cups, recipe.oil_tbsp,
      recipe.raisins_cups, recipe.salt_tsp, recipe.sugar_cups, recipe.vanilla_tsp, recipe.water_cups];
  }

  console.log(convertRecipe(cake_recipe));
  console.log(angleBetween(convertRecipe(cake_recipe), convertRecipe(cupcake_recipe)));