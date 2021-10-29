import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort"
import { sortPopulation } from "../store/actions"

export default function OrderByPopulation() {
    const dispatch = useDispatch()
    function onSelectChange(e) {
        dispatch(sortPopulation(e.target.value))
    }
    return <div>
        <select name="orderByPopulation" onChange={onSelectChange}>
        <option value='order'>Order by population</option>
            <option value={ASCENDENTE}>Ascendente</option>
            <option value={DESCENDENTE}>Descendente</option>
        </select>
    </div>
}