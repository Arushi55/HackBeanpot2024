import React from 'react';
import Recipe from './recipe.js';
import Search from './search.js';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


export default function MyApp() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

MyApp()
