import { React, useState, useEffect } from 'react'
import axios from 'axios';
import Pokemon from './Pokemon';

function PokemonList() {
  
  let [pokemons, setPokemons] = useState([]);
  let [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  let [nextUrl, setNextUrl] = useState("");
  let [prevUrl, setPrevUrl] = useState("");

  useEffect(
    () => {
      axios.get(currentUrl).then(
        (response) => {
          const { next, previous, results } = response.data;
          setNextUrl(next);
          setPrevUrl(previous);
          setPokemons(results);
          console.log(results)
        }
      ).catch(
        (err) => { console.log(err) }
      )
    },[currentUrl]
  )

  
    return pokemons.map(
      (pokemon) => {
        return <Pokemon data={pokemon} key={pokemon.name} />
      }
    )
  

}

export default PokemonList