import FilterByActivity from "../filters/filterByActivity";
import FilterByContinent from "../filters/filterByContinent";
import NavBar from "../navBar/navBar";
import OrderByName from "../orders/orderByName";
import OrderByPopulation from "../orders/orderByPopulation";
import Pages from "../pages/pages";
import './home.modules.css'

export default function Home() {
    return (<div className='home'>
            <NavBar />
            <div className='filterContainer'>
            <OrderByName />
            <OrderByPopulation />
            <FilterByContinent />
            <FilterByActivity />
            </div>
            <Pages />
        </div>
    )
}