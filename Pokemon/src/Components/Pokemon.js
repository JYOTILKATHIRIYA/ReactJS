import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

import { useDispatch } from 'react-redux';

function Pokemon({ data }) {
  const name = data.name;
  const url = data.url;
  let Dispatch = useDispatch();

  const [image, setImage] = React.useState("");
  const [types, setTypes] = React.useState([]);
  const [pokemonId, setPokemonId] = React.useState(0);

  React.useEffect(
    () => {
      axios.get(url).then(
        (response) => {
          let pokemon = response.data;
          let types = pokemon.types.map(
            (pokemontype) => pokemontype.type.name
          )
          setImage(pokemon.sprites.other.dream_world.front_default);
          setTypes(types);
          setPokemonId(pokemon.id)
          //console.log(response.data)
        }
      )
    }, []
  )

  function storePokemon(name, url) {

    Dispatch({
      type: "storePokemon",
      payLoad: {
        id: pokemonId,
        name,
        url,
        image,
        types
      }
    })
  }

  return (
    <div className='pokemonContainer'>

      <div className='pokemonName'>
        <h3>{name}</h3>
      </div>
      <div className='pokemonImage'>
        <img src={image} alt={`#${name}`} />
      </div>
      <div className='pokemonTypes'>
        <span>Types : </span>
        {
          types.map(
            (type) => <span className="type" key={type}>{type}</span>
          )
        }
      </div>

      <div className="explore_btn_cont">
        <Link className='btnlink' to="/Details"><button onClick={() => { storePokemon(name, url) }}>Explore</button></Link>
      </div>
    </div>
  )
}

export default Pokemon