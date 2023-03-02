import React, { useRef } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchAnimal() {


  const [searchedName, setSearchedName] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  let inputRef = React.useRef();
  let spinner = React.useRef();
  const alertContRef = React.useRef();

  let dispatch = useDispatch();

  //   function handleChange(changeEvent) {
  //     setSearchedName(changeEvent.target.value);
  // console.log(inputRef.current.value)
  //   }

  function handleSearch(submitEvent) {
    submitEvent.preventDefault();
    localStorage.setItem("newSearch", true)
    spinner.current.style.display = "flex";

    alertContRef.current.style.display = "none"


    let configurations = {
      method: "GET",
      url: "https://animals-by-api-ninjas.p.rapidapi.com/v1/animals",
      params: {
        name: inputRef.current.value
      },
      headers: {
        'X-RapidAPI-Key': 'aafdc37c15msh21a35c295ddd062p1b0891jsne3cdb8b02443',
        'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
      }
    }

    axios.request(configurations).then(
      (response) => { spinner.current.style.display = "none"; setSearchResult(response.data) }
    );

  }

  function setAnimal(animalName) {
    console.log("dispatched : " + animalName)

    localStorage.setItem("animal", animalName);
    dispatch({
      type: "getAnimal",
      payLoad: {
        animalName: animalName
      }
    })
  }

  function displaySearchResults() {

    let resultlocal = (localStorage.getItem("newSearch") === "true") ? searchResult : JSON.parse(localStorage.getItem("searchResult")) || [];

    if (localStorage.getItem("newSearch") === "true" && resultlocal.length === 0) {
      alertContRef.current.style.display = "flex";
      localStorage.setItem("newSearch", false);
      return;
    }

    localStorage.setItem("NoOfResults", resultlocal.length)
   
    if (resultlocal.length > 0) {

      localStorage.setItem("searchResult", JSON.stringify(resultlocal));
      localStorage.setItem("newSearch", false);

      let resultAnimals = resultlocal.map(
        (animal, index) => {
          return (
            <div className="testimonial-item text-center" key={index}>
              <div className="testimonial-item text-center">
                <div className="testimonial-text rounded text-center p-4">
                  <h5 className="mb-1" style={{ color: "whitesmoke", cursor: "pointer" }}
                    onClick={() => { setAnimal(animal.name) }}>
                    <Link to="/Animal" style={{ color: "whitesmoke", cursor: "pointer" }}>{animal.name}</Link></h5>
                </div>
              </div>
            </div>
          )
        }
      )
      return (
        <>
          <div className="container">
            <h1
              className="display-5 text-center mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              {localStorage.getItem("NoOfResults") > 0 && localStorage.getItem("NoOfResults") + " Search Result"}{searchResult.length > 1 && "s"}
            </h1>
            <div
              className=""
              data-wow-delay="0.1s"
            >
              {resultAnimals}
              {console.log("Fetched")}
            </div>
          </div>
        </>
      )
    }
    return;
  }



  let alertStyle = {
    color: "#004085",
    display: "none",
    justifyContent: "center",
    "z-index": "12",
    position: "absolute",
    fontWeight: "500",
    fontSize: "17px",
    width: "100%"
  }

  return (
    <>
      <div className="full" style={alertStyle} ref={alertContRef}>
        <div className="padding_infor_info">
          <div className="alert alert-primary" style={{ border: "1px solid green" }} role="alert">Sorry!! Animal Not Found!</div>
        </div>
      </div>
      <div

        style={{
          display: "none",
          top: "0", left: "0", "z-index": "5",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed", height: "100vh", width: "100vw", "backgroundColor": "rgba(0,0,0,0.7"
        }}

        ref={spinner}
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"

        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="container-xxl py-5">

        <div className="position-relative mx-auto" style={{ maxWidth: "400px", margin: "20px", backgroundColor: "lightskyblue" }}>
          <form onSubmit={handleSearch}>
            <input
              className="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Enter Animal Name"
              name="searchedName"
              ref={inputRef}
            />
            <button
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              Find
            </button>
          </form>
        </div>

        {displaySearchResults()}

      </div>


    </>
  )
}

