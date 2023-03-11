import React from "react"
import icon10 from "../Assets/images/icon/icon-10.png"
import { Link } from "react-router-dom"

export default function Header({ links }) {

  return (
    <>
      {/* <!-- Navbar Start --> */}
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a href="index.html" className="navbar-brand p-0">
          <img className="img-fluid me-3" src={icon10} alt="Icon" />
          <h1 className="m-0 text-primary">Zoofari</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link to={links.home} className="nav-item nav-link ">Home</Link>


          </div>
          <Link to={links.searchAnimal} className="btn btn-primary"
          ><font style={{ color: "white" }} >Search Animal<i className="fa fa-arrow-right ms-3"></i
          ></font></Link>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>

  )
}