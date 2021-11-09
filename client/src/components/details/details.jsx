import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getDetails } from "../../store/actions";
import "../details/details.modules.css";

export default function Details(params) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetails(id));
  }, []);
  const country = countries[0];
  return (
    <>
      <div>
        <Link to="/home">
          <button className='button-back'>Go back</button>
        </Link>
      </div>
      <div className="details-container">
        {country ? 
        ( <div>
            <div className="card-details">
              <h2>{country.name}</h2>
              <img
                className="flag-details"
                src={country.img}
                alt="country img not found"
              />
              <h3>{country.id}</h3>
              <h3>Capital: {country.capital}</h3>
              <h3>Continent: {country.continent}</h3>
              <h4>Subregion: {country.subregion}</h4>
              <h4>Area: {country.area} km2</h4>
              <h4>Population: {country.population}</h4>
            </div>
            <div className="activities">
              <h3 className='title-activities'>Activities</h3>
              {country.activities?.map((e) => (
                <div className='activity-detail'>
                  <h3>Name: {e.name}</h3>
                  <h3>Dificulty: {e.dificulty}</h3>
                  <h3>Duration: {e.duration} hs</h3>
                  <h3>Season: {e.season}</h3>
                </div>
              ))}
                <div >
                  <Link to="/addActivity">
                    <button className='button-create'>Create activity!</button>
                  </Link>
                </div>
          </div>
          </div>):
          
          (<div>Loading...</div>)
        }
      </div>
    </>
  );
}
