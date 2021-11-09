import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE } from "../../constantes/sort"
import { sortName } from "../../store/actions"

export default function OrderByName() {
    const dispatch = useDispatch()
    function onSelectChange(e) {
        dispatch(sortName(e.target.value))
    }
    return (<div>
    <label value='order'>Order by name: </label>
        <select name="orderByName" onChange={onSelectChange}>
        <option value='select'>Select</option>

            <option value={ASCENDENTE}>Ascendente</option>
            <option value={DESCENDENTE}>Descendente</option>
        </select>
    </div>)
}