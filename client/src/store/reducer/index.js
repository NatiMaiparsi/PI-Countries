import { ASCENDENTE } from "../../constantes/sort"
import { FETCH_ACTIVITIES, FETCH_COUNTRIES, NEW_ACTIVITY, SEARCH_COUNTRIES, SORT } from "../actions"

const inicialState = {
    countries: [],
    filteredCountries: [],
    // activities: []
}

export default function reducer(state = inicialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                filteredCountries: action.payload
            }
        // case FETCH_ACTIVITIES:
        //     return {
        //         ...state,
        //         activities: action.payload,
        //     }
        case SEARCH_COUNTRIES:
            return {
                ...state,
                filteredCountries: action.payload
                // countries: action.filtered,

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
        //     activities: state.activities.concat(action.payload)
        // }
        
        default:
            return state
    }
}