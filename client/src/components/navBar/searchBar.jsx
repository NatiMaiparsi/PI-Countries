import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../store/actions';
import './navBar.modules.css'

export default function SearchBar() {
    const [search, setSearch] = useState('')
    let dispatch = useDispatch()
    function onSubmit(e) {
        e.preventDefault();
        dispatch(searchCountries(search))
        setSearch('')
    }

    function onInputChange(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }

    return <>
        <form onSubmit={e => onSubmit(e)}>
            <input className='inputSearch' type="text" placeholder='Search country...'onChange={e => onInputChange(e)} value={search}/>
            <input className='buttonSearch' type='submit' value='Search'/>
        </form>
    </>
}