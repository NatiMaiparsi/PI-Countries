import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE } from "../../constantes/sort"
import { sortPopulation } from "../../store/actions"

export default function OrderByPopulation() {
    const dispatch = useDispatch()
    function onSelectChange(e) {
        dispatch(sortPopulation(e.target.value))
    }
    return <div>
        <label value='order'>Order by population: </label>
        <select name="orderByPopulation" onChange={onSelectChange}>
        <option value='select'>Select</option>

            <option value={ASCENDENTE}>Asc</option>
            <option value={DESCENDENTE}>Desc</option>
        </select>
    </div>
}