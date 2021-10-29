import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Details() {
    const [country, setCountry] = useState(null)
    let {id} = useParams()
    useEffect(() => {
        axios.get('http://localhost:3001/api/countries/' + id )
        .then((response) => {
            setCountry(response.data)
        })
        return () => {
            setCountry(null)
        } // limpia, cuando se usa redux
    }, [])
    return (
        <div>
        {
                country ? 
           <>
        <h3>{country[0].name}</h3>
        <img src={country[0].img} alt="country img" />
        <h3>Capital: {country[0].capital}</h3>
        <h3>Continent: {country[0].continent}</h3>
        <h4>Subregion: {country[0].subregion}</h4>
        <h4>Area: {country[0].area} km2</h4>
        <h4>Population: {country[0].population}</h4>
        </> :
        <div>Loading...</div> 
        }
        </div>
    )
}