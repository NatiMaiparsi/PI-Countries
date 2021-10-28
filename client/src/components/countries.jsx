import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries } from "../store/actions"
import Country from './country'

export default function Countries() {
    let countries = useSelector((state) => state.filteredCountries)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCountries())
    }, [])
    console.log(countries)
    return <div>
        {countries.map(country => {
            return <Country key={country.id} name={country.name} img={country.img} continent={country.continent}/>
        })}
    </div>
}