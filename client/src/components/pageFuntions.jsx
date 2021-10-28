import React from "react";

export default function Paginado({countriesPerPage, allCountries, paginado}){
    const pageNumber = []

    for (let i=0; i<=Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumber.push(i + 1)
    }

    return (
        <nav>
            <ul>
                { pageNumber && pageNumber.map(number => (
                    <li key={number} className='number'>
                    <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}