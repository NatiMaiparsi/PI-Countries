import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort"
import { sort } from "../store/actions"

export default function Order () {
    const dispatch = useDispatch()
    const [order, setOrder] = useState('')
    useEffect(() => {
        dispatch(sort(order))
    },[order])
    function onSelectChange(e) {
        setOrder(e.target.value)
    }
    return <div>
        <select name="order" onChange={onSelectChange}>
            <option value='order'>Select order</option>
            <option value={ASCENDENTE}>Ascendente</option>
            <option value={DESCENDENTE}>Descendente</option>
        </select>
    </div>
}