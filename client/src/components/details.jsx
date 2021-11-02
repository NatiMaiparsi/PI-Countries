import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDetails } from "../store/actions";

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
              <h2>{country.name}</h2>
              <img src={country.img} alt="country img" />
              <h3>{country.id}</h3>
              <h3>Capital: {country.capital}</h3>
              <h3>Continent: {country.continent}</h3>
              <h4>Subregion: {country.subregion}</h4>
              <h4>Area: {country.area} km2</h4>
              <h4>Population: {country.population}</h4>
            </div>
            <h3>Activities</h3>
      {country.activities?.map((e) => (
        <div>
          <h3>Name: {e.name}</h3>
          <h3>Dificulty: {e.dificulty}</h3>
          <h3>Duration: {e.duration} hs</h3>
          <h3>Season: {e.season}</h3>
        </div>
      ))}</> : 
          <div>Loading...</div>
      
      }</div>
  );
}
