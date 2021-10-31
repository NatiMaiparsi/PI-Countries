import {useState} from 'react'
import { searchCountries } from '../store/actions';
import { useDispatch } from 'react-redux';
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

    return <div>
        <form onSubmit={e => onSubmit(e)}>
            <input type="text" placeholder='Search country...'onChange={e => onInputChange(e)} value={search}/>
            <input type='submit' value='Search'/>
        </form>
    </div>
}