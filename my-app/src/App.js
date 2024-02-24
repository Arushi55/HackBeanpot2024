import React from 'react';
import Recipe from './recipe.js';
import Search from './search.js';


  const submit = () => {

  }


export default function MyApp() {
  return (
    <div>
      <Search />
      <button onClick={submit}>Submit</button>
      <Recipe />
    </div>
  );
}

MyApp()
