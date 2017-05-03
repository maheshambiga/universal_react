/**
 * Created by mambig on 7/1/2016.
 */
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import worldCountriesReducer from './WorldCountries';
import CountryDetailsReducer from './CountryDetails';

const RootReducers = combineReducers({
    worldCountries:worldCountriesReducer,
    countryDetails: CountryDetailsReducer,
    router: routerStateReducer// Configure reducer to store state at state.router
});

export default RootReducers;