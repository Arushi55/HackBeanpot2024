import React from 'react';
import { sortRecipes } from './sort-method.js';

const Search = () => {
    const QuantityBox = ({name, unit, id}) => {
        return (
            <label>
                What is the amount of <b>{name}</b> you have (in {unit})? 
                <input name={name} type="number" inputMode="numeric" placeholder="0" onChange={handleChange} id={id}/>
            </label>
        )
      }

    const inputs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
 
    const handleChange = (event) => {
        console.log(event.target);
        console.log(event.target.id);
        console.log(event.target.value);
        console.log(inputs);
        inputs[event.target.id] = Number(event.target.value);
        console.log(inputs);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(sortRecipes(inputs)); 
    }

    return (
      <form>
        <QuantityBox name="baking powder" unit="tsp" id={0}/>
        <br></br>

        <QuantityBox name="baking soda" unit="tsp" id={1}/>
        <br></br>

        <QuantityBox name="brown sugar" unit="cups" id={2}/>
        <br></br>

        <QuantityBox name="butter" unit="tbsp" id={3}/>
        <br></br>

        <QuantityBox name="chocolate chips" unit="cups" id={4}/>
        <br></br>

        <QuantityBox name="cinnamon" unit="cups" id={5}/>
        <br></br>

        <QuantityBox name="cream of tartar" unit="tsp" id={6}/>
        <br></br>

        <QuantityBox name="cocoa powder" unit="cups" id={7}/>
        <br></br>

        <QuantityBox name="cornstarch" unit="tbsp" id={8}/>
        <br></br>
     
        <QuantityBox name="eggs" unit="count" id={9}/>
        <br></br>

        <QuantityBox name="flour" unit="cups" id={10}/>
        <br></br>

        <QuantityBox name="ginger" unit="tsp" id={11}/>
        <br></br>

        <QuantityBox name="honey" unit="tbsp" id={12}/>
        <br></br>

        <QuantityBox name="milk" unit="cups" id={13}/>
        <br></br>

        <QuantityBox name="nutmeg" unit="tsp" id={14}/>
        <br></br>

        <QuantityBox name="nuts" unit="cups" id={15}/>
        <br></br>

        <QuantityBox name="oats" unit="cups" id={16}/>
        <br></br>

        <QuantityBox name="oil" unit="tbsp" id={17}/>
        <br></br>

        <QuantityBox name="raisins" unit="cups" id={18}/>
        <br></br>

        <QuantityBox name="salt" unit="tsp" id={19}/>
        <br></br>

        <QuantityBox name="sugar" unit="cups" id={20}/>
        <br></br>

        <QuantityBox name="vanilla" unit="tsp" id={21}/>
        <br></br>

        <QuantityBox name="water" unit="cups" id={22}/>
        <br></br>

        
        <input type="submit" onClick={handleSubmit}/>
      </form>
    );
  };

  export default Search;
  