const cake_recipe = {
    name: 'Cake',
    flour: 1.5,
    sugar: 1,
    butter: 4,
    egg: 2,
    vanilla: 2,
    baking_powder: 1.75,
    milk: .5,
    steps: "1. Gather all ingredients.\n \
    2. Preheat the oven to 350 degrees F (175 degrees C). Grease and flour a 9-inch square cake pan. \n \
    3. Cream sugar and butter together in a mixing bowl. Add eggs, one at a time, beating briefly after each addition. Mix in vanilla. \n \
    4. Combine flour and baking powder in a separate bowl. Add to the wet ingredients and mix well. Add milk and stir until smooth. \n \
    5. Pour batter into the prepared cake pan. \n \
    6. Bake in the preheated oven until the top springs back when lightly touched, 30 to 40 minutes.\n \
    7. Remove from the oven and cool completely."
  };

  export default function Recipe() {
    return (
      <>
        <h1>{cake_recipe.name}</h1>
        <div className="recipe"/>
            <li>{cake_recipe.flour}</li>
            <li>{cake_recipe.sugar}</li>
            <li>{cake_recipe.butter}</li>
            <li>{cake_recipe.egg}</li>
            <li>{cake_recipe.vanilla}</li>
            <li>{cake_recipe.baking_powder}</li>
            <li>{cake_recipe.milk}</li>
            <li>{cake_recipe.steps}</li>
        <div/>
      </>
    );
  }
  