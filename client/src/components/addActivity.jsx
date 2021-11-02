import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { fetchCountries, postActivity } from "../store/actions"

function validation(activity){
    let errors = {};
    if(!activity.name){
        errors.name = 'The name of the activity is required'
    } else if (!activity.country) {
        errors.country = 'At least one country is required'
    } else if (!activity.season) {
        errors.season = 'Choose one season'
    }
    return errors
}
export default function AddActivity() {
    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector((state) => state.countries)
    const [errors,setErrors] = useState({})
    const [activity,setActivity] = useState({
        name: '',
        dificulty: '',
        duration: '',
        season: '',
        country: []
    })
    useEffect(() => {
        dispatch(fetchCountries())
    },[])


    let orderedCountries = countries.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
    })

    function handleSelect(e) {
        setActivity({
            ...activity,
            country: [...activity.country, e.target.value]
        })
    }

    function handleCheck(e) {
        if(e.target.checked) {
          setActivity({
              ...activity,
              season: e.target.value
          })
        }
      }

        function onInputChange(e) {
            e.preventDefault()
            setActivity({
                ...activity,
                [e.target.name]: e.target.value
            })
            setErrors(validation({
                ...activity,
                [e.target.name]: e.target.value
            }))
        }
        function onSubmit(e) {
            e.preventDefault()
            dispatch(postActivity(activity))
            alert('Activity created')
            setActivity({
                name: '',
                dificulty: '',
                duration: '',
                season: '',
                country: []
            })
            history.push('/home')
        }

        function handleDelete(el) {
            setActivity({
                ...activity,
                country: activity.country.filter(country => country !== el)
            })
        }

        
    return (<>
        <div>
        <Link to='/home'><button>Return</button></Link>
        </div>
        <form onSubmit={onSubmit}>
            <div>
        <label for="name">Activity: </label>
        <input onChange={onInputChange} name='name' type='text' value={activity.name}/>
        {errors.name && (
            <p>{errors.name}</p>
        )}
        </div>
        <div>
        <label for="dificulty">Dificulty (1 to 5): </label>
        <input onChange={onInputChange} name='dificulty' min='1' max='5' type="range" value={activity.dificulty}/>
        </div>
        <div>
        <label for="duration">Duration: </label>
        <input onChange={onInputChange} name='duration' type='text' value={activity.duration}/>
        </div>
        <div>
        <label for="season">Season: </label>
        <label><input type='checkbox'
        name='Invierno'
        value='Invierno'
        onChange={(e) => handleCheck(e)}/>Invierno</label>
        <label><input type='checkbox'
        id=''
        name='Verano'
        value='Verano'
        onChange={(e) => handleCheck(e)}/>Verano</label>
        <label><input type='checkbox'
        name='Otoño'
        value='Otoño'
        onChange={(e) => handleCheck(e)}/>Otoño</label>
        <label><input type='checkbox'
        name='Primavera'
        value='Primavera'
        onChange={(e) => handleCheck(e)}/>Primavera</label>
                {errors.season && (
            <p>{errors.season}</p>
        )}
        </div>
        <div>
        <label for="country">Country: </label>
            
            <select onChange={e => handleSelect(e)}>
                <option value='Select'>Select countries...</option>
            {orderedCountries.map(country => {
                return <option value={country.name}>{country.name}</option>
            })}
        </select>
        {errors.country && (
            <p>{errors.country}</p>
        )}
        <button type='submit'>Create!</button>
        </div>
    </form>
        {activity.country.map(country => 
            <div>
                <p>{country}</p>
                <button onClick={() => handleDelete(country)}>x</button>
            </div>)}
    </>)
}