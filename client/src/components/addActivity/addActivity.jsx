import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { fetchCountries, postActivity } from "../../store/actions"
import './addActivity.modules.css'

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
        <div >
        <Link to='/home'><button className='button-back'>Return</button></Link>
        </div>
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className='data'>
        <label for="name">Activity: </label>
        <input onChange={onInputChange} name='name' type='text' value={activity.name} required/>
        {errors.name && 
            <p className='errors'>{errors.name}</p>
        }
        </div>
        <div className='data'>
        <label for="dificulty">Dificulty: </label>
        <input onChange={onInputChange} name='dificulty'  min='1' max='5' type="number" value={activity.dificulty} />
        </div>
        <div className='data'>
        <label for="duration">Duration: </label>
        <input onChange={onInputChange} name='duration' type='number' min='1' max='24' value={activity.duration} /> Hs
        </div>
        <div className='season'>
        <label for="season">Season: </label>
        <div>
        <label><input className='seasons' type='radio'
        name='season'
        value='Winter'
        onChange={(e) => handleCheck(e)}/>Winter</label>
        </div>
        <div>    
        <label><input className='seasons' type='radio'
        id=''
        name='season'
        value='Summer'
        onChange={(e) => handleCheck(e)}/>Summer</label>
        </div>
        <div>
        <label><input className='seasons' type='radio'
        name='season'
        value='Autumn'
        onChange={(e) => handleCheck(e)}/>Autumn</label>
        </div>
        <div>
        <label><input className='seasons' type='radio'
        name='season'
        value='Spring'
        onChange={(e) => handleCheck(e)}/>Spring</label>
        </div>
                {errors.season && (
            <p className='errors'>{errors.season}</p>
        )}
        </div>
        <div className='data'>
        <label for="country">Country: </label>
            
                {errors.country && (
                    <p className='errors'>{errors.country}</p>
                )}
            <select onChange={e => handleSelect(e)} >
                <option >Select countries...</option>
            {orderedCountries.map(country => {
                return <option value={country.name}>{country.name}</option>
            })}
        </select>
        <div className='data'>
        <button type='submit' className='btn-create'>Create!</button>
        </div>
        {activity.country.map(country => 
            <div>
                <button className='country-button' onClick={() => handleDelete(country)}>{country}</button>
            </div>)}
        </div>
    </form>
    </div>
    </>)
}