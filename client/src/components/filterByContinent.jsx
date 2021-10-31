import { useDispatch } from "react-redux";
import { filterByContinent } from "../store/actions";

export default function FilterByContinent() {
    const dispatch = useDispatch()
    function handleFilterContinent(e){
        e.preventDefault()
        dispatch(filterByContinent(e.target.value))
    }
    
  return (
    <div>
      Filter by continent
      <form>
        <div>
      <input onChange={e => handleFilterContinent(e)} type="checkbox" value="All" />
      <label for="All">All</label>
      </div>
      <div>
      <input onChange={e => handleFilterContinent(e)} type="checkbox" value="Americas" />
      <label for="Americas">Americas</label>
      </div>
      <div>
      <input onChange={e => handleFilterContinent(e)} type="checkbox" value="Europe" />
      <label for="Europe">Europe</label>
      </div>
      <div>
      <input onChange={e => handleFilterContinent(e)} type="checkbox" value="Africa" />
      <label for="Africa">Africa</label>
      </div>
      <div>
      <input onChange={e => handleFilterContinent(e)} type="checkbox" value="Asia" />
      <label for="Asia">Asia</label>
      </div>
      <div>
      <input onChange={e => handleFilterContinent(e)} type="checkbox" value="Oceania" />
      <label for="Oceania">Oceania</label>
      </div>
      <div>
      <input onChange={e => handleFilterContinent(e)} type="checkbox" value="Antarctic" />
      <label for="Antarctic">Antarctic</label>
      </div>
      </form>
    </div>
  );
}
