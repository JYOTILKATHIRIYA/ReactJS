
import aboutImage from "./assets/images/about.jpg"
import imagelg1 from "./assets/images/animal-lg-1.jpg"
import imagelg2 from "./assets/images/animal-lg-2.jpg"
import imagelg3 from "./assets/images/animal-lg-3.jpg"
import imagemd1 from "./assets/images/animal-md-1.jpg"
import imagemd2 from "./assets/images/animal-md-2.jpg"
import imagemd3 from "./assets/images/animal-md-3.jpg"

import { Link } from "react-router-dom";

export default function Home() {
  localStorage.clear();
  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-dark p-0 mb-5">
        <div className="">
          <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
            <div
              className="header-bg  p-5"
              style={{ width: "100vw", height: "45vh", display: "flex", alignItems: "center" }}
            >
              <h1 className="display-4 text-light mb-5">
                Find All About Animals Here
              </h1>

            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}


      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              
              <h1 className="display-5 mb-4">
                You can find about animals'.......
              </h1>

              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Species
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Biological Data
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Natural Environment
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Amazing facts
              </h5>

              <Link className="btn btn-primary py-3 px-5 mt-3" to="/SearchAnimal">Get Started<i className="fa fa-arrow-right ms-3"></i
              ></Link>

            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src={aboutImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Animal Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="row g-5 mb-5 align-items-end wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">
                Animals are <span className="text-primary">Awesome</span>&nbsp;
                by Nature
              </h1>
            </div>

          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-4">
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="img/animal-md-1.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={imagemd1} alt="" />

                    </div>
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="img/animal-lg-1.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={imagelg1} alt="" />

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
                    href="img/animal-lg-2.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={imagelg2} alt="" />

                    </div>
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="img/animal-md-2.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={imagemd2} alt="" />

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
                    href="img/animal-md-3.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={imagemd3} alt="" />

                    </div>
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="img/animal-lg-3.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src={imagelg3} alt="" />

                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Animal End --> */}


      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"
      ><i className="bi bi-arrow-up"></i
      ></a>

    </>

  )
}