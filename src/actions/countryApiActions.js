/**
 * Created by mambig on 5/28/2016.
 */
import request from 'axios';

export const WORLD_COUNTRIES = 'WORLD_COUNTRIES';
export const WORLD_COUNTRIES_REQUEST = 'WORLD_COUNTRIES_REQUEST';
export const WORLD_COUNTRIES_SUCCESS = 'WORLD_COUNTRIES_SUCCESS';
export const INVALIDATE_WORLD_COUNTRIES = 'INVALIDATE_WORLD_COUNTRIES';
export const WORLD_COUNTRIES_FAILURE = 'WORLD_COUNTRIES_FAILURE';
export const FILTER_COUNTRY = "FILTER_COUNTRY";

export function invalidateCountryApiResponse() {
    return {
        type: INVALIDATE_WORLD_COUNTRIES
    };
}

export function fetchWorldCountries() {
    return {
        type: WORLD_COUNTRIES,
        promise : request.get(`https://restcountries.eu/rest/v1/all`)
    }
}

function shouldFetchWorldCountries(state) {
    const worldCountries = state.worldCountries;
    if (worldCountries.isFetching===false && worldCountries.result.length===0) {
        return true;
    }else{
        return false;
    }
}

export function fetchWorldCountriesIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchWorldCountries(getState())) {
            return dispatch(fetchWorldCountries());
        }
    }
}

export function filterCountry (searchText) {
    return {
        type:FILTER_COUNTRY,
        searchText
    }
}