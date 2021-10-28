import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Country from "./country";
import Paginado from "./pageFuntions";
export default function Pages() {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.filteredCountries)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage,setCountriesPerPage] = useState(9)
    const indexLastCountry = currentPage * countriesPerPage // 9
    const indexFirstCountry = indexLastCountry - countriesPerPage // 0
    const currentCountry = allCountries.slice(indexFirstCountry,indexLastCountry)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return <div>
        <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginado={paginado} />
        {currentCountry.map((c) => {
            return (
                <div>
                <Link to={'/home' + c.id}>
                <Country name={c.name} img={c.img} continent={c.continent} key={c.id}/>
                </Link>
                </div>
            )
        })}
    </div>
}