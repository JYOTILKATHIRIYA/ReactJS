import {Routes,Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";

import React from 'react'
import PokemonDetails from "../Components/PokemonDetails";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Search" element={<SearchPage />} />
      <Route path="/Details" element={<PokemonDetails />} />
    </Routes>
  )
}

export default AppRouter