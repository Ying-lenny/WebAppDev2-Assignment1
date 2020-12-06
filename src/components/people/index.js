import React from "react";
import "./people.css";

export default ({ people }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{people.biography}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Runtime (min.)
        </li>
        <li key="rut" className="list-group-item ">
          {people.gender}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Release Date
        </li>
        <li key="rdv" className="list-group-item ">
          {people.popularity}
        </li>
      </ul>
    </>
  );
};