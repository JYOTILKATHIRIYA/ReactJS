import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'


function PokemonDetails() {

  const [pokemonDetails, setPokemonDetails] = React.useState({});
  const [abilities, setAbilities] = React.useState([]);
  const [moves, setMoves] = React.useState([])

  const Pokemon = useSelector(
    (state) => state.pokemon
  )
  const [pokemonURL, setPockemonURL] = React.useState(Pokemon.url);

  const imageurl = Pokemon.image

  React.useEffect(
    () => {
      axios.get(pokemonURL).then(
        (response) => {
          setPokemonDetails(response.data)
          setAbilities(response.data.abilities);
          response.data.abilities.forEach(
            (ability) => {
              axios.get(ability.ability.url).then(
                (res) => {
                  // console.log(res.data)
                  let { name } = res.data;
                  const effect = res.data.effect_entries[0].effect;
                  setAbilities((prev) => { return [...prev, { name, effect }] })
                }
              )
            }
          )
          // console.log(response.data.moves)
          response.data.moves.forEach(
            (move) => {
              axios.get(move.move.url).then(
                (res) => {
                  console.log(res.data)
                  let { name, power, accuracy } = res.data;
                  const type = res.data.type;
                  setMoves((prev) => { return [...prev, { name, power, accuracy, type }] })
                }
              )
            }
          )
        }
      ).catch((err) => {
        console.log(err);
      })
    }, [pokemonURL]
  );

  const {
    id, name, height, weight
  } = pokemonDetails || ""

  function getPrevious() {

    let newId = id < 1 ? 1 : id - 1;
    let newPockemonURL = pokemonURL.replace(id, newId);
    console.log(newPockemonURL);
    setPockemonURL(newPockemonURL);
  }
  function getNext() {

    let newId = id + 1;
    let newPockemonURL = pokemonURL.replace(id, newId);
    console.log(newPockemonURL);
    setPockemonURL(newPockemonURL);
  }
  return (
    <div className='details_page_cont'>

      <div className="details_nav_btns" style={{ padding: "20px" }}>
        <button onClick={getPrevious}>Prev</button>
        <button onClick={getNext}>Next</button>
      </div>
      <div className='deatails_section1'>
        <div className="details_image">
          <img src={imageurl || ""} />
        </div>

        <div className='details_basic_info'>
          <span>Name : <h1>{name || ""}</h1></span>
          <span>Height : <h1>{height || ""}</h1></span>
          <span>Weight : <h1>{weight || ""}</h1></span>
          <div className='types_cont'>
            <span>Types : 
            <div>
              {
                Pokemon.types.map((type) => <h2>{type}</h2>)
              }
            </div>
            </span>
          </div>
        </div>
      </div>
      <div className='details_abilities'>
        <h1>Abilities : </h1>
        <div className='abilities_con'>
        {
          abilities.map(
            (ability) => {
              
              return (
                <div className='ability_con'>
                  <h2 className='ability_name'>{ability.name}</h2>
                  <span>{ability.effect}</span>
                </div>
              )
            }
          )
        }
        </div>
      </div>

      <div className='details_moves'>
        <h1>Moves : </h1>
        <div className='moves_cont'>
        {
          moves.map(
            (move) => {
              return (
                <div className='move' style={{ padding: "10px" }}>
                  <h3 className='move_name'>{move.name || "No"}</h3>
                  <h3 className='move_power'>Power : {move.power || "No"}</h3>
                  <h3 className='move_accuracy'>Accuracy : {move.accuracy || "No"}</h3>
                </div>
              )
            }
          )
        }
        </div>
      </div>


    </div>
  )
}

export default PokemonDetails