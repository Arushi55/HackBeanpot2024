import React, { useState } from 'react';
import './App.css';
import Recipe from './recipe.js';
import Search from './search.js';
import { AppContext} from "./AppContext.js";

function App() {
  const [appState, setAppState] = useState({
    inputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  });
  return (
    <AppContext.Provider value={{appState, setAppState}}> 
    <div>
      <Search />
      <Recipe />
    </div>
    </AppContext.Provider>
  );
}

export default App;