import { useDispatch } from "react-redux";
import { filterByContinent } from "../../store/actions";

export default function FilterByContinent() {
    const dispatch = useDispatch()
    function handleFilterContinent(e){
        e.preventDefault()
        dispatch(filterByContinent(e.target.value))
    }
    
  return (
    <div>
    <label>Filter by continent: </label>
        <select onChange={e => handleFilterContinent(e)}>
      <option value="All">All</option>
      <option value="Americas">Americas</option>
      <option value="Europe">Europe</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
      <option value="Antarctic">Antarctic</option>
      </select>
    </div>
  );
}
