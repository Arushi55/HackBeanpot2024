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
        <input
          label="Flour (cups)"
          type="checkbox"
          value="Flour (cups)"
          onChange={handleChange}
        />
        <input
          label="Sugar (cups)"
          type="checkbox"
          value="Sugar (cups)"
          onChange={handleChange}
        />
      </div>
    );
  };
  
  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };
  
  export default Search;