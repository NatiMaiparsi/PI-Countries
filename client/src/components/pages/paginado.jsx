import React from "react";
import './pages.modules.css'

export default function Paginado({countriesPerPage, allCountries, paginado}){
    const pageNumber = []
    for (let i=1; i<=Math.ceil(allCountries/countriesPerPage); i++) { 
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className='pageNumbers'>
                {pageNumber && pageNumber.map(number => ( 
                    <li key={number} className='numbers'>
                    <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}