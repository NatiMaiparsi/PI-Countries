import NavBar from "./navBar";
import Pages from "./pages";
import FilterByContinent from "./filterByContinent";
import OrderByName from "./orderByName";
import OrderByPopulation from "./orderByPopulation";
import FilterByActivity from "./filterByActivity";

export default function Home() {

    return (<div>
            <div>
            <NavBar />
            <OrderByName />
            <OrderByPopulation/>
            <FilterByActivity />
            <FilterByContinent />
            </div>
            <Pages />
        </div>
    )
}