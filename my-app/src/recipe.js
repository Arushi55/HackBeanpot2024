import './recipe.css';

const cake_recipe = {
    name: 'Cake',
    flour: 1.5,
    sugar: 1,
    butter: 4,
    eggs: 2,
    vanilla: 2,
    baking_powder: 1.75,
    milk: .5,
    steps: "1. Gather all ingredients.\
    2. Preheat the oven to 350 degrees F (175 degrees C). Grease and flour a 9-inch square cake pan. \
    3. Cream sugar and butter together in a mixing bowl. Add eggs, one at a time, beating briefly after each addition. Mix in vanilla. \
    4. Combine flour and baking powder in a separate bowl. Add to the wet ingredients and mix well. Add milk and stir until smooth. \
    5. Pour batter into the prepared cake pan. \
    6. Bake in the preheated oven until the top springs back when lightly touched, 30 to 40 minutes. \
    7. Remove from the oven and cool completely."
  };

  const cupcake_recipe = {
    name: 'Cupcake',
    flour: 2.5,
    sugar: 2,
    eggs: 2,
    vanilla: 2,
    baking_powder: 3,
    milk: .5,
    salt: 1,
    oil: .5,
    water: 1,
    steps: "1. Preheat oven to 350°F (176°C) and prepare a cupcake pan with liners. \
    2.  Add the flour, sugar, baking powder and salt to a large mixer bowl and combine. Set aside. \
    3. Add the milk, vegetable oil, vanilla extract and eggs to a medium sized bowl and combine. \
    4. Add the wet ingredients to the dry ingredients and beat until well combined. \
    5. Slowly add the water to the batter and mix on low speed until well combined. Scrape down the sides of the bowl as needed to make sure everything is well combined. Please note that the batter will be very thin.\
    6. Fill the cupcake liners about half way and bake for 15-17 minutes, or until a toothpick comes out with a few moist crumbs. \
    7. Remove the cupcakes from oven and allow to cool for 2 minutes, then remove to a cooling rack to finish cooling."
  }

  const all_recipes = [cake_recipe, cupcake_recipe];

  export default function Recipe() {
    return (
      all_recipes.map(recipe => <>
        <h1>{cake_recipe.name}</h1>
        <div className="recipe"/>
            <li>Flour: {recipe.flour}</li>
            <li>Sugar: {recipe.sugar}</li>
            <li>Butter: {recipe.butter}</li>
            <li>Eggs: {recipe.egg}</li>
            <li>Vanilla: {recipe.vanilla}</li>
            <li>Baking Powder: {recipe.baking_powder}</li>
            <li>Milk: {recipe.milk}</li>
            <li>Steps: {recipe.steps}</li>
        <div/>
      </>)
    );
  }
  