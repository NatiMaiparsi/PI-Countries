// import Countries from "./countries";
import NavBar from "./navBar";
import Order from "./order";
import Pages from "./pages";
import Countries from "./countries";
import SearchByActivity from "./searchByActivity";
import SearchByContinent from "./searchByContinent";

export default function Home() {

    return (<div>
            <div>
            <NavBar />
            <Order />
            {/* <SearchByActivity /> */}
            {/* <SearchByContinent /> */}
            </div>
            {/* <Pages /> */}
            <div>
            <Countries/>
            </div>
        </div>
    )
}