import axios from 'axios'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const SORT = 'SORT'
export const NEW_ACTIVITY = 'NEW_ACTIVITY'

export function fetchCountries() {
    return function(dispatch){
        axios.get('http://localhost:3001/api/countries/')
        .then((countries) => {
            return dispatch({
                type: FETCH_COUNTRIES,
                payload: countries.data
            })
        })
        .catch ((error) => {
            console.log(error)
        })
    }
}


export function searchCountries(search) {
    return function(dispatch){
    axios.get('http://localhost:3001/api/countries?name=' + search)
    .then((countries) => {
        return dispatch({
            type: SEARCH_COUNTRIES,
            payload: countries.data
        })
    })
    .catch ((error) => {
        console.log(error)
    })
}}

export function sort(order) {
    return {
        type: SORT,
        payload: order
    }
}
