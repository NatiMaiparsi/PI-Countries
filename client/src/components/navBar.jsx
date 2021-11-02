import React from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "./searchBar"


export default function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li >
                        <NavLink exact to="/home" >Country App</NavLink>
                        <NavLink to="/addactivity" >Add activities</NavLink>
                        <SearchBar />
                    </li>

                </ul>
            </nav>
        </header>
    )
}