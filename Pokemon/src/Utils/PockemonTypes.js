
import axios from "axios";

const types = [];

axios.get("https://pokeapi.co/api/v2/type").then(
  (response)=>{
    return response.data.results.forEach(type => {
      types.push(type.name)
    });
  }
)

export default types;