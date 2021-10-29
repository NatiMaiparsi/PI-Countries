// import Countries from "./countries";
import NavBar from "./navBar";
import Order from "./orderByName";
import Pages from "./pages";
import Countries from "./countries";
import SearchByActivity from "./searchByActivity";
import SearchByContinent from "./searchByContinent";
import OrderByName from "./orderByName";
import OrderByPopulation from "./orderByPopulation";

export default function Home() {

    return (<div>
            <div>
            <NavBar />
            <OrderByName />
            <OrderByPopulation/>
            {/* <SearchByActivity /> */}
            {/* <SearchByContinent /> */}
            </div>
            <Pages />
            {/* <div >
            <Countries/>
            </div> */}
        </div>
    )
}