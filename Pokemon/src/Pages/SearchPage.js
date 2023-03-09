import React from 'react'
import PokemonList from '../Components/PokemonList'
import axios from 'axios'
import PockemonTypes from "../Utils/PockemonTypes"
import Pokemon from '../Components/Pokemon'

function SearchPage() {

  const [currentFilter, setCurrentFilter] = React.useState({ type: "Select Pokemon Type", name: "" })
  const [list, setList] = React.useState(<PokemonList />);
  
  function handleChange(changeEvent) {
    const { name, value } = changeEvent.target;
    setCurrentFilter((prev) => { return { ...prev, [name]: value } })
  }
function getSelectedType(selectEvent){

  let selectedType = selectEvent.target.value;
  setCurrentFilter((prev)=>{return {...prev,type:selectedType}})
  let newUrl = `https://pokeapi.co/api/v2/type/${selectedType}`;
  
  axios.get(newUrl).then((response)=>{
    let newList = response.data.pokemon.map(
      (pokemon,index)=>{
        if(index>20)return;
        let {name,url}=pokemon.pokemon;
        return <Pokemon data={{name,url}} />
      }
    )
    // console.log(newList);
    setList(newList)
  }).catch((err)=>{window.alert("Pokemon not Found");console.log(err)});

}
  function handleSearch(searchEvent) {
    searchEvent.preventDefault();
    displayList(true);
  }

  function displayList(){

    let searchedName = currentFilter.name;
    console.log("submitted")
    let newUrl = `https://pokeapi.co/api/v2/pokemon/${searchedName}`;
    
    axios.get(newUrl).then((response)=>{
      setList(<Pokemon data={{name:searchedName,url:newUrl}} />)
    }).catch((err)=>{console.log(err)})
  }

  return (
    <div>
      <div className='filters_cont'>

        <form onSubmit={handleSearch}>

          <div>
            <input className='inputText' name="name" placeholder="Type Pokemon Name" type='text' value={currentFilter.name} onChange={handleChange} />
          </div>

          <div>
            <span style={{display:"inline-block"}}>Select Pokemon Type : </span>&nbsp;<select name="type" value={currentFilter.type} onChange={getSelectedType}>
              {
                PockemonTypes.map(
                  (type) => {
                    return <option value={type} key={type}>{type}</option>
                  }
                )
              }
            </select>
          </div>


          <div>
            <button>Search</button>
          </div>
        </form>
      </div>
      <div className='pockemon_list_cont'>

      {list}
      </div>
      
    </div>
  )
}


export default SearchPage