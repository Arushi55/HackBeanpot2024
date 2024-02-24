import './recipe.css';
import {all_recipes} from "./recipe-conversion.js";
  
  function Item({value, name}) {
    if (value !== 0) {
      return <li className ="ingredients">{name}: {value}</li>;
    }
  }

  export default function Recipe() {
    return (
      all_recipes.map(recipe =>
      <div className="recipe-wrapper">
        <h1 className="recipe-name"> {recipe.name}</h1>
        <div className="recipe">
            <Item value={recipe.baking_powder_tsp} name="Baking Powder (tsp)"/>
            <Item value={recipe.baking_soda_tsp} name="Baking Soda (tsp)"/>
            <Item value={recipe.brown_sugar_cups} name="Brown Sugar (cups)"/>
            <Item value={recipe.butter_tbsp} name="Butter (tbsp)"/>
            <Item value={recipe.choco_chips_cups} name="Chocolate Chips (cups)"/>
            <Item value={recipe.cinnamon_tsp} name="Cinnamon (tsp)"/>
            <Item value={recipe.cream_tartar_tsp} name="Cream of Tartar (tsp)"/>
            <Item value={recipe.cocoa_powder_cups} name="Cocoa Powder (cups)"/>
            <Item value={recipe.cornstarch_tbsp} name="Cornstarch (tbsp)"/>
            <Item value={recipe.eggs_num} name="Eggs"/>
            <Item value={recipe.flour_cups} name="Flour (cups)"/>
            <Item value={recipe.ginger_tsp} name="Ginger (tsp)"/>
            <Item value={recipe.honey_tbsp} name="Honey (tbsp):"/>
            <Item value={recipe.milk_cups} name="Milk (cups)"/>
            <Item value={recipe.nutmeg_tsp} name="Nutmeg (tsp)"/>
            <Item value={recipe.nuts_cups} name="Nuts (cups)"/>
            <Item value={recipe.oats_cups} name="Oats (cups)"/>
            <Item value={recipe.oil_tbsp} name="Oil (tbsp)"/>
            <Item value={recipe.raisins_cups} name="Raisins (cups)"/>
            <Item value={recipe.salt_tsp} name="Salt (tsp)"/>
            <Item value={recipe.sugar_cups} name="Sugar (cups)"/>
            <Item value={recipe.vanilla_tsp} name="Vanilla (tsp)"/>
            <Item value={recipe.water_cups} name="Water (cups)"/>
            <br></br>
            <h3>Steps:</h3>
            <li>{recipe.steps}</li>
        </div>
      </div>)
    );
  }
