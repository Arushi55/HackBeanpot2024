import React from 'react';

const Search = () => {
    const [userinfo, setUserInfo] = React.useState({
        languages: [],
        response: [],
    });
 
    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
        const { languages } = userinfo;
 
        console.log(`${value} is ${checked}`);
 
        // Case 1 : The user checks the box
        if (checked) {
            setUserInfo({
                languages: [...languages, value],
                response: [...languages, value],
            });
        }
 
        // Case 2  : The user unchecks the box
        else {
            setUserInfo({
                languages: languages.filter(
                    (e) => e !== value
                ),
                response: languages.filter(
                    (e) => e !== value
                ),
            });
        }
    };

  
    return (
      <div>
        <Checkbox name="Baking Powder (tsp)" handleChange={handleChange} />
        <Label name="Baking Powder (tsp)"/>
        <QuantityBox />
        <br></br>

        <Checkbox name="Baking Soda (tsp)" handleChange={handleChange} />
        <Label name="Baking Soda (tsp)"/>
        <QuantityBox />
        <br></br>

        <Checkbox name="Brown Sugar (cups)" handleChange={handleChange} />
        <Label name="Brown Sugar (cups)" />

        <Checkbox name="Butter (tbsp)" handleChange={handleChange} />
        <Label name="Butter (tbsp)" />

        <Checkbox name="Chocolate Chips (cups)" handleChange={handleChange} />
        <Label name="Chocolate Chips (cups)" />

        <Checkbox name="Cinnamon (tsp)" handleChange={handleChange} />
        <Label name="Cinnamon (tsp)" />

        <Checkbox name="Cream of Tartar (tsp)" handleChange={handleChange} />
        <Label name="Cream of Tartar (tsp)" />

        <Checkbox name="Cocoa Powder (cups)" handleChange={handleChange} />
        <Label name="Cocoa Powder (cups)" />

        <Checkbox name="Cornstarch (tbsp)" handleChange={handleChange} />
        <Label name="Cornstarch (tbsp)" />

        <Checkbox name="Eggs" handleChange={handleChange} />
        <Label name="Eggs" />

        <Checkbox name="Flour (cups)" handleChange={handleChange} />
        <Label name="Flour (cups)"/>

        <Checkbox name="Ginger (tsp)" handleChange={handleChange} />
        <Label name="Ginger (tsp)" />

        <Checkbox name="Honey (tbsp)" handleChange={handleChange} />
        <Label name="Honey (tbsp)" />

        <Checkbox name="Milk (cups)" handleChange={handleChange} />
        <Label name="Milk (cups)" />

        <Checkbox name="Nutmeg (tsp)" handleChange={handleChange} />
        <Label name="Nutmeg (tsp)" />

        <Checkbox name="Nuts (cups)" handleChange={handleChange} />
        <Label name="Nuts (cups)" />

        <Checkbox name="Oats (cups)" handleChange={handleChange} />
        <Label name="Oats (cups)" />

        <Checkbox name="Oil (tbsp)" handleChange={handleChange} />
        <Label name="Oil (tbsp)" />

        <Checkbox name="Raisins (cups)" handleChange={handleChange} />
        <Label name="Raisins (cups)" />

        <Checkbox name="Salt (tsp)" handleChange={handleChange} />
        <Label name="Salt (tsp)" />

        <Checkbox name="Sugar (cups)" handleChange={handleChange} />
        <Label name="Sugar (cups)" />

        <Checkbox name="Vanilla (tsp)" handleChange={handleChange} />
        <Label name="Vanilla (tsp)" />

        <Checkbox name="Water (cups)" handleChange={handleChange} />
        <Label name="Water (cups)" />

        
        
      </div>
    );
  };
  
  const Checkbox = ({name, handleChange}) => {
    return (<input
    className="form-check-input"
    type="checkbox"
    value={name}
    onChange={handleChange}
  />);
  };

  const Label = ({ name }) => {
    return (
      <label>
        {name}
      </label>
    );
  };

  const QuantityBox = () => {
    return (
        <label>
            How much do you have? <input name="quantity" type="text" inputmode="numeric" placeholder="0" />
        </label>
    )
  }
  
  export default Search;
  