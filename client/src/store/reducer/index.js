import { ASCENDENTE } from "../../constantes/sort"
import { FETCH_COUNTRIES, NEW_ACTIVITY, SEARCH_COUNTRIES, SORT } from "../actions"

const inicialState = {
    countries: [],
    filteredCountries: []
}

export default function reducer(state = inicialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                filteredCountries: action.payload
            }
        case SEARCH_COUNTRIES:
            return {
                ...state,
                filteredCountries: action.payload
            }
        case SORT: 
            let orderedCountries = [...state.countries]
            orderedCountries = orderedCountries.sort((a,b) => {
                if(a.name < b.name){
                    return action.payload === ASCENDENTE ? -1 : 1;
                }
                if(a.name > b.name){
                    return action.payload === ASCENDENTE ? 1 : -1;;
                }
                return 0;
            })
            return {
                ...state,
                filteredCountries: orderedCountries
            }
        // case NEW_ACTIVITY: 
        // return {
        //     ...state,
        //     countries: state.countries.concat(action.payload)
        // }
        default:
            return state
    }
}