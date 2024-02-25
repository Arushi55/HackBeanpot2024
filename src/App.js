import React, { useState } from 'react';
import './App.css';
import Recipe from './recipe.js';
import Search from './search.js';
import { AppContext } from "./AppContext.js";

function App() {
  const [appState, setAppState] = useState({
    inputs: []
  });
  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <div>
        <div className="search">
          <div className='header'>
            <h1 id="title">The Perfect Pantry</h1>
            <h4 id="instructions">Tell us the amount of ingredients in your pantry, and we'll give you the recipe that most closely matches those ingredients!</h4>
          </div>
          <Search />
        </div>
        <Recipe />
      </div>
    </AppContext.Provider>
  );
}

export default App;