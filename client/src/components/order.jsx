import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort"
import { sort } from "../store/actions"

export default function Order () {
    const dispatch = useDispatch()
    function onSelectChange(e) {
        dispatch(sort(e.target.value))
    }
    return <div>
        <select name="orderByName" onChange={onSelectChange}>
            <option value='order'>Order by name</option>
            <option value={ASCENDENTE}>Ascendente</option>
            <option value={DESCENDENTE}>Descendente</option>
        </select>
    </div>
}