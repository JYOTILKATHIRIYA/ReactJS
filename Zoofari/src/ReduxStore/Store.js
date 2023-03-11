import { createStore } from "redux"
import { createClient } from "pexels";

/*Redux Store*/

//Method to fetch Pictures from 'PEXELS' API;
function fetchImages(animalName) {
  const client = createClient('JmZxMbLKmcJh5ahbTdjMNkJi28uD8kipL41XuzKXLpAODrOzCF8T1nCw');
  let query = animalName + " animal";
  let pictureUrls = [];

  client.photos.search({ query, per_page: 6 }).then(
    API => {
      API.photos.map(
        (photo, index) => {
          pictureUrls.push(photo.src.large);
          return photo;
        }
      )
    }).catch((err) => console.log(err));

  return pictureUrls;
}

//Method to create an Animal Object for the Store
function getAnimal() {

  let animal = localStorage.getItem("animal") || "Camel";

  return {
    animalName: animal, pictureUrls: fetchImages(animal)
  };

}

//Reducer to Update the Redux Store based on actions
let Reducer = function (state = getAnimal(), action) {

  switch (action.type) {
    case "getAnimal":
      let animal = action.payLoad.animalName;
      // console.log("Dispatched Animal Change  : " + animal)
      let pictureUrls = fetchImages(animal)
      // console.log(pictureUrls)
      return { ...state, animalName: animal, pictureUrls }

    default:
      return state;
  }

}

//Creating the Store
let store = createStore(Reducer);

export default store;