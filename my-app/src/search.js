import React from 'react';

const Search = () => {
    const [inputs, setInputs] = React.useState({});
 
    const handleChange = (event) => {};

    return (
      <div>
        <QuantityBox name="baking powder" unit="tsp"/>
        <br></br>

        <QuantityBox name="baking soda" unit="tsp"/>
        <br></br>

        <QuantityBox name="brown sugar" unit="cups"/>
        <br></br>

        <QuantityBox name="butter" unit="tbsp"/>
        <br></br>

        <QuantityBox name="chocolate chips" unit="cups"/>
        <br></br>

        <QuantityBox name="cinnamon" unit="cups"/>
        <br></br>

        <QuantityBox name="cream of tartar" unit="tsp"/>
        <br></br>

        <QuantityBox name="cocoa powder" unit="cups"/>
        <br></br>

        <QuantityBox name="cornstarch" unit="tbsp"/>
        <br></br>
     
        <QuantityBox name="eggs" unit="count"/>
        <br></br>

        <QuantityBox name="flour" unit="cups"/>
        <br></br>

        <QuantityBox name="ginger" unit="tsp"/>
        <br></br>

        <QuantityBox name="honey" unit="tbsp"/>
        <br></br>

        <QuantityBox name="milk" unit="cups"/>
        <br></br>

        <QuantityBox name="nutmeg" unit="tsp"/>
        <br></br>

        <QuantityBox name="nuts" unit="cups"/>
        <br></br>

        <QuantityBox name="oats" unit="cups"/>
        <br></br>

        <QuantityBox name="oil" unit="tbsp"/>
        <br></br>

        <QuantityBox name="raisins" unit="cups"/>
        <br></br>

        <QuantityBox name="salt" unit="tsp"/>
        <br></br>

        <QuantityBox name="sugar" unit="cups"/>
        <br></br>

        <QuantityBox name="vanilla" unit="tsp"/>
        <br></br>

        <QuantityBox name="water" unit="cups"/>
        <br></br>

        
        
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

  const QuantityBox = ({name, unit, handleChange}) => {
    return (
        <label>
            What is the amount of <b>{name}</b> you have (in {unit})? <input name={name} type="text" inputmode="numeric" placeholder="0" onChange={handleChange}/>
        </label>
    )
  }
  
  export default Search;
  