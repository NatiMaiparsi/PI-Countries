import { ASCENDENTE } from "../../constantes/sort";
import {
  FETCH_ACTIVITIES,
  FETCH_COUNTRIES,
  NEW_ACTIVITY,
  SEARCH_COUNTRIES,
  SORT_NAME,
  SORT_POPULATION,
  FILTER_BY_CONTINENT,
  POST_ACTIVITY,
  GET_DETAILS,
  FILTER_BY_ACTIVITY
} from "../actions";

const inicialState = {
  countries: [],
  filteredCountries: [],
  activities: [],
  detail: [],
  filteredActivities: []
};

export default function reducer(state = inicialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };
    case FETCH_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        filteredActivities: action.payload
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload
      }
    case SORT_NAME:
      let countries = [...state.filteredCountries];
      if (action.payload === "select") {
        return {
          ...state,
          filteredCountries: countries,
        };
      }
      let orderedCountries = countries.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredCountries: orderedCountries,
      };
    case SORT_POPULATION:
      let allCountriesPop = [...state.filteredCountries];
      if (action.payload === "select") {
        return {
          ...state,
          filteredCountries: allCountriesPop,
        };
      }
      let orderedCountriesPop = allCountriesPop.sort((a, b) => {
        if (a.population < b.population) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.population > b.population) {
          return action.payload === ASCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredCountries: orderedCountriesPop,
      };
    case NEW_ACTIVITY:
      return {
        ...state,
        activities: state.activities.concat(action.payload),
      };
    case FILTER_BY_CONTINENT:
      const allCountries = state.countries;
      const continentFiltered =
        action.payload === "All"
          ? allCountries
          : allCountries.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        filteredCountries: continentFiltered,
      };
      case FILTER_BY_ACTIVITY:
        const countriesActivities = state.countries;
        const activityFiltered = action.payload === "All" ? countriesActivities
        : 
        countriesActivities.filter(
          country =>  country.activities.find(act => act.name === action.payload));
            return {
              ...state,
              filteredCountries: activityFiltered
            }
    default:
      return state;
  }
}
