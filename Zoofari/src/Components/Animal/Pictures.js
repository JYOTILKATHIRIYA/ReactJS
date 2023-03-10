import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


/* Rendering Animal's pictures */
export default function Pictures() {
  
  //Geting Pictures from ReduxStore
  const URLs = useSelector((state) => state.pictureUrls)

  //URLs of Pictures will be the state of Pictures component
  const PictureUrls = React.useState(URLs)
  
/*
  useEffect(
    () => {
      setPictureUrls(APIData.pictureUrls);
    }, [APIData.animalName]
  )*/
  // console.log(APIData.animalName);

  return (
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="row g-4">
          <div className="col-12">
            <a
              className="animal-item"

              data-lightbox="animal"
            >
              <div className="position-relative">
                <img className="img-fluid" src={PictureUrls[0] || ""} alt="" />


              </div>
            </a>
          </div>
          <div className="col-12">
            <a
              className="animal-item"

              data-lightbox="animal"
            >
              <div className="position-relative">
                <img className="img-fluid" src={PictureUrls[1] || ""} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="row g-4">
          <div className="col-12">
            <a
              className="animal-item"

              data-lightbox="animal"
            >
              <div className="position-relative">
                <img className="img-fluid" src={PictureUrls[2] || ""} alt="" />

              </div>
            </a>
          </div>
          <div className="col-12">
            <a
              className="animal-item"

              data-lightbox="animal"
            >
              <div className="position-relative">
                <img className="img-fluid" src={PictureUrls[3] || ""} alt="" />

              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="row g-4">
          <div className="col-12">
            <a
              className="animal-item"

              data-lightbox="animal"
            >
              <div className="position-relative">
                <img className="img-fluid" src={PictureUrls[4] || ""} alt="" />

              </div>
            </a>
          </div>
          <div className="col-12">
            <a
              className="animal-item"

              data-lightbox="animal"
            >
              <div className="position-relative">
                <img className="img-fluid" src={PictureUrls[5] || ""} alt="" />

              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


