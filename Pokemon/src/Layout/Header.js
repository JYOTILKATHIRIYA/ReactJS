import React from "react";

import "../Assets/css/Header.css"
import logo from "../Assets/logo/logo.png"
import { Link } from "react-router-dom";

export default function Header()
{
  return(
    <div className="header">
      
      <div className="logo_cont">
        <img src={logo} alt="#logo" />
      </div>

      <div className="searchLink_cont">
        <Link to="/Search">
         <button>Search Pokemon</button> 
          </Link>
      </div>
    </div>
  )
}