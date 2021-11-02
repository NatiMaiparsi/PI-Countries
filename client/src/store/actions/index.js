import axios from 'axios'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const SORT_NAME = 'SORT_NAME'
export const NEW_ACTIVITY = 'NEW_ACTIVITY'
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES'
export const SORT_POPULATION = 'SORT_POPULATION'
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const GET_DETAILS = 'GET_DETAILS'
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY'

export function fetchCountries() {
    console.log('fetchCountries')
    return function(dispatch){
        axios.get('http://localhost:3001/api/countries/')
        .then((countriesData) => {
            let countries = countriesData.data.map(e=>{
    			let country = {
    				id: e.id,
				    img: e.img,
				    name: e.name,
				    continent: e.continent,
				    population: e.population,
				    Activity: e.Activity, // cambie activities por activity en los dos!!
    			}
    			return country
  			})
            return dispatch({ 
                type: FETCH_COUNTRIES,
                payload: countries
            })
        })
        .catch ((error) => {
            console.log(error)
        })
    }
}

export function fetchActivities() {
    console.log('traigo actividades')
    return function(dispatch){
        axios.get('http://localhost:3001/api/activities/')
        .then((activities) => {
            return dispatch({
                type: FETCH_ACTIVITIES,
                payload: activities.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function getDetails(id) {
    console.log('get details', id)
    return function(dispatch) {
        axios.get('http://localhost:3001/api/countries/' + id )
        .then((country) => {
        return dispatch({
            type: GET_DETAILS,
            payload: country.data
        })
    })
    .catch((error) => {
        console.log(error)
    })
}}

    export function postActivity(payload) {
        console.log('hago el post')
        return function(dispatch){
        axios.post('http://localhost:3001/api/activities', payload)
        .catch((error) => {
            console.log(error)
        })
    }}
// export function postActivity(payload) {
//     return async function(dispatch) {
//         const activities = await axios.post('http://localhost:3001/api/activities', payload)
//         console.log(activities)
//         return activities
//     }
// }

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

export function sortPopulation(order) {
    return {
        type: SORT_POPULATION,
        payload: order
    }
}

export function sortName(order) {
    return {
        type: SORT_NAME,
        payload: order
    }
}

export function filterByContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export function filterByActivity(payload){
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
}

