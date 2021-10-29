import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"

export default function AddActivity() {
    const [activity,setActivity] = useState({})
    let history = useHistory()
    function onInputChange(e) {
        e.preventDefault()
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
    }
    function onSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/api/activities', activity)
        .then(() => {
            history.push('/home')
        })
    }
    return <form onSubmit={onSubmit}>
        <label htmlFor="">Activity: </label>
        <input onChange={onInputChange} name='name' type='text' />
        <label htmlFor="">Dificulty: </label>
        <input onChange={onInputChange} name='dificulty' type='text' />
        <label htmlFor="">Duration: </label>
        <input onChange={onInputChange} name='duration' type='text' />
        <label htmlFor="">Season: </label>
        <input onChange={onInputChange} name='season' type='text' />
        <input type='submit' />
    </form>
}