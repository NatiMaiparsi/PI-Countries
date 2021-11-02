import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchActivities, searchCountries, getDetails } from "../store/actions";

export default function Details(params) {
  const {id} = useParams()
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetails(id));
  }, []);
  const country = countries[0]
  console.log("country", country);
  return (
    <div>
      { country?
      <>
            <div>
              <h3>{country.name}</h3>
              <img src={country.img} alt="country img" />
              <h3>{country.id}</h3>
              <h3>Capital: {country.capital}</h3>
              <h3>Continent: {country.continent}</h3>
              <h4>Subregion: {country.subregion}</h4>
              <h4>Area: {country.area} km2</h4>
              <h4>Population: {country.population}</h4>
            </div>
      {country.activities?.map((e) => (
        <div>
          <p>
            Name: {e.name}, Dificulty: {e.dificulty}, Duration: {e.duration},
            Season: {e.season}
          </p>
        </div>
      ))}</> : 
          <div>Loading...</div>
      
      }</div>
  );
}
