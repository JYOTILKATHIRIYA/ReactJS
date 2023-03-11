import React from "react"

/*Rendering Animal's Texonomy*/
export default function (props) {

  //Method to create HTML table of animal's taxonomy
  function createTable(taxonomy) {

    return Object.keys(taxonomy).map(
      (key, index) => {
        return (
          <li key={index} className="list-group-item">
            <span key={index}>{key}</span>
            <span>{taxonomy[key]}</span>
          </li>
        )
      }
    )

  }

  return (
    <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
      <h1 className="display-6 text-white mb-5">Taxonomy</h1>
      <ul className="list-group list-group-flush">
        {createTable(props.taxonomy || {})}
      </ul>
    </div>
  )
}

