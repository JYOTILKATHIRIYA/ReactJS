import ApiNinja from "axios";

/* Function will get the animal's data from RapidAPI.com and return a Promise object */
export default function getData(name = "cheetah") {

  let configurations = {
    method: 'GET',
    url: 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals',
    params: { name: name },
    headers: {
      'X-RapidAPI-Key': 'aafdc37c15msh21a35c295ddd062p1b0891jsne3cdb8b02443',
      'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
    }

  }
  let response = ApiNinja.request(configurations);
 
  return response.then();

}

