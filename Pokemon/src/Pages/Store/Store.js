import { createStore } from "redux";
let initialState = {
  id: 1,
  name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  types: [ "grass", "poison" ]
}

let store = createStore(
  (state = { pokemon: initialState }, action) => {
    switch (action.type) {
      case "storePokemon":
        return {
          pokemon: {
            id: action.payLoad.id,
            name: action.payLoad.name,
            url: action.payLoad.url,
            image: action.payLoad.image,
            types: action.payLoad.types
          }
        }
      default:
        return state;
    }
  }
)
export default store;