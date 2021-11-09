import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../store/actions";
import Country from "../countryCard/country";
import Paginado from "./paginado";


export default function Pages() {
    const dispatch = useDispatch()
    let countries = useSelector((state) => state.filteredCountries)
    useEffect(() => {
        dispatch(fetchCountries())
    }, [])
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage,setCountriesPerPage] = useState(10)
    const indexLastCountry = currentPage * countriesPerPage // 10
    const indexFirstCountry = indexLastCountry - countriesPerPage // 0
    const currentCountries = countries?.slice(indexFirstCountry,indexLastCountry) // countries en la pantalla
    const length = countries.length
    const paginado = (pageNumber) => { //ayuda al renderizado, tomo el paginado para renderizar
        setCurrentPage(pageNumber)
    }


    return <>
        <div>
        <Paginado countriesPerPage={countriesPerPage} allCountries={length} paginado={paginado} />
        </div>
        <div className='country'>
        {currentCountries?.map((c) => {
            return <Country id={c.id} name={c.name} img={c.img} continent={c.continent} key={c.id}/>
        })}
    </div>
    </>
}