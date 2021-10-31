import React from 'react';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchActivities, getDetails } from '../store/actions';

export default function Details(props) {
    console.log('detail props',props)
    let params = useParams()
    console.log('detail params',params)
    const dispatch = useDispatch()
    // const [country, setCountry] = useState(null)
    // console.log(params)
    useEffect(() => {
        dispatch(getDetails(params.id))
    }, [dispatch])
    const country = useSelector((state) => state.detail)
    console.log('country detail',country)
    return (
        <div>
        {
                country ? 
           <>
        <h3>{country[0].name}</h3>
        <img src={country[0].img} alt="country img" />
        <h3>{country[0].id}</h3>
        <h3>Capital: {country[0].capital}</h3>
        <h3>Continent: {country[0].continent}</h3>
        <h4>Subregion: {country[0].subregion}</h4>
        <h4>Area: {country[0].area} km2</h4>
        <h4>Population: {country[0].population}</h4>
        <h4>Activities: {country[0].activity}</h4>
        </> :
        <div>Loading...</div> 
        }
        </div>
    )
}