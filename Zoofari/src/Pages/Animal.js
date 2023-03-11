import React from "react";
import { useSelector } from "react-redux";

/*Components which are rendered in the Animal Page*/
import TaxonomyTable from "../Components/Animal/TaxonomyTable";
import LocationsTable from "../Components/Animal/LocationsTable";

/*Function to get a particlar animal's data from API*/
import getAnimalData from "../Utils/getAnimalData";

/* Rendering Animal Page */
export default function AnimalPage() {

  //The State of the page will be particular animal's data
  const [animalData, setAnimalData] = React.useState({});

  //Name and pictures of the animal will be gotton from ReduxStore
  const APIData = useSelector((state) => state)
  const animalName = APIData.animalName;
  const PictureUrls = APIData.pictureUrls;
let image=new Image();
  //Fetching animal's data and setting to the state
  React.useEffect(
    () => {
      
      getAnimalData(animalName).then(
        (res) => {
          setAnimalData(res.data[0]);
        }
      )


    },[]
  )

  //Destructing properties of the state object into variable
  const { name, taxonomy, locations, characteristics } = animalData || "";
  const { slogan,
    weight,
    height,
    age_of_sexual_maturity,
    lifespan,
    habitat,
    diet,
    estimated_population_size,
    number_of_species
  } = characteristics || "";


  //Method to prepare an detailed assay based on animal's characteristics
  const prepareEssay = function () {

    const { prey, main_prey, name_of_young, skin_type,
      group_behaviour, temperament,
      predators, favorite_food,
      biggest_threat,
      gestation_period,
      average_litter_size,
      most_distinctive_feature, distinctive_feature, venomous, aggression,
      lifestyle, common_name, group, top_speed
    } = characteristics || "";

    let style = {
      linHeight: "1.8",
      marginTop: "25px",
      marginLeft: "-40px",
      listStylePosition: "inside",
      fontSize: "20px",
      fontWeight: "500",
    }

    return (
      <ul style={style} >
        {(prey || main_prey) ? <li className="mb-3">It preys {prey || main_prey}.</li> : ""}
        {(venomous == "No") ? <li className="mb-3">Non venomous.</li> : (venomous == "Yes") && <li className="mb-3">Venomous.</li>}
        {(skin_type) ? <li className="mb-3">{skin_type} skin type.</li> : ""}
        {(aggression) ? <li className="mb-3">{aggression} aggression.</li> : ""}
        {(predators) ? <li className="mb-3"> Main predators of {name}s : {predators}.</li> : ""}
        {(name_of_young) ? <li className="mb-3">Young {name} is called {name_of_young}.</li> : ""}
        {(group_behaviour) ? <li className="mb-3">Lives in {group_behaviour}.</li> : ""}
        {(temperament) ? <li className="mb-3">{temperament} temperament.</li> : ""}
        {(biggest_threat) ? <li className="mb-3">They have the biggest threat of {biggest_threat}.</li> : ""}
        {(most_distinctive_feature || distinctive_feature) ? <li className="mb-3">The most distinctive feature of {name} is {most_distinctive_feature || distinctive_feature}.</li> : ""}
        {(gestation_period) ? <li className="mb-3">Gestation Period of female {name} is about {gestation_period} {average_litter_size ? ("and female can give birth to " + average_litter_size + " " + (name_of_young || "offspring") + (average_litter_size > 1 && "s")) : ""}.</li> : ""}
        {(average_litter_size && !gestation_period) ? <li className="mb-3">Female {name} can give birth to {average_litter_size} {(name_of_young || "offspring")}{(average_litter_size > 1 && "s")} at a time.</li> : " "}
        {(lifestyle) ? <li className="mb-3"> {lifestyle} life style.</li> : ""}
        {(common_name) ? <li className="mb-3">Common name is  {common_name}.</li> : ""}
        {(group) ? <li className="mb-3">It comes in  {group} group.</li> : ""}
        {(favorite_food) ? <li className="mb-3">{name} loves {favorite_food}.</li> : ""}
        {(top_speed) ? <li className="mb-3">Their top speed is around {top_speed}.</li> : ""}
      </ul>
    )
  }
//
  
  return (
    <>
    {/* Top Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <p><span className="text-primary me-2">#</span>{slogan || name}</p>
              <h1 className="display-5 mb-0">

                <span className="text-primary">{name}</span>
              </h1>
            </div>

          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-4">
                <div className="col-12">
                  <div
                    className="animal-item"

                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={PictureUrls[0]} alt=""  decoding="async" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="animal-item"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={PictureUrls[1]} alt=""  decoding="async"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="row g-4">
                <div className="col-12">
                  <div
                    className="animal-item"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={PictureUrls[2]} alt=""  decoding="async"/>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="animal-item"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={PictureUrls[3]} alt=""  decoding="async"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-4">
                <div className="col-12">
                  <div
                    className="animal-item"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={PictureUrls[4]} alt=""  decoding="async"/>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="animal-item"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={PictureUrls[5]} alt="" decoding="async" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    {/* <!--Top Section--> */}

      
      {/* <!-- Taxonomy and Locations --> */}
      <div
        className="container-xxl bg-primary visiting-hours my-5 py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">

            <TaxonomyTable taxonomy={taxonomy} />
            <LocationsTable locations={locations} />
          </div>
        </div>
      </div>
      {/* <!--Taxonomy and Locations End-->

    <!-- Charecteristics --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6" >
              <p><span className="text-primary me-2">#</span>{name}</p>
              <h1 className="display-5 mb-0" >

                <span className="text-primary">Characteristics</span>
              </h1>
            </div>

          </div>
          <div className="row gy-5 gx-4">

            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s">
              <h5 className="mb-3">Height</h5>
              <span>{height || "Non Specific"}</span>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s">
              <h5 className="mb-3">Weight</h5>
              <span>{weight || "Not known"}</span>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s">
              <h5 className="mb-3">Diet</h5>
              <span>{diet || "Not known"}</span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s">
              <h5 className="mb-3">Habitat</h5>
              <span>{habitat || "Not known"}</span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s">
              <h5 className="mb-3">Estimated Population</h5>
              <span>{estimated_population_size || "Not known"}</span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s">
              <h5 className="mb-3">No. of Species</h5>
              <span>{number_of_species || "Not known"}</span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s">
              <h5 className="mb-3">Life Span</h5>
              <span>{lifespan || "Not known"}</span>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s">
              <h5 className="mb-3">Age of Sexual Maturity</h5>
              <span>{age_of_sexual_maturity || "Not known"}</span>
            </div>
            <div >
              {prepareEssay()}
            </div>
          </div>
        </div>
      </div>


      {/* <!-Charecteristics -->*/}


    </>


  )
}
