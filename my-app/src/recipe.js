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
    steps: ""
  }

  const all_recipes = [cake_recipe, cupcake_recipe];

  export default function Recipe() {
    return (
      all_recipes.map(recipe => <>
        <h1>{cake_recipe.name}</h1>
        <div className="recipe"/>
            <li>Flour: {cake_recipe.flour}</li>
            <li>Sugar: {cake_recipe.sugar}</li>
            <li>Butter: {cake_recipe.butter}</li>
            <li>Eggs: {cake_recipe.egg}</li>
            <li>Vanilla: {cake_recipe.vanilla}</li>
            <li>Baking Powder: {cake_recipe.baking_powder}</li>
            <li>Milk: {cake_recipe.milk}</li>
            <li>Steps: {cake_recipe.steps}</li>
        <div/>
      </>)
    );
  }
  