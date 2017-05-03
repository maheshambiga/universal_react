/**
 * Created by mambig on 7/4/2016.
 */
import request from 'axios';

export const COUNTRY_DETAILS = 'COUNTRY_DETAILS';
export const COUNTRY_DETAILS_REQUEST = 'COUNTRY_DETAILS_REQUEST';
export const COUNTRY_DETAILS_SUCCESS = 'COUNTRY_DETAILS_SUCCESS';
export const INVALIDATE_COUNTRY_DETAILS = 'INVALIDATE_COUNTRY_DETAILS';
export const COUNTRY_DETAILS_FAILURE = 'COUNTRY_DETAILS_FAILURE';


export function invalidateCountryDetailsResponse() {
    return {
        type: INVALIDATE_COUNTRY_DETAILS
    };
}

export function fetchCountryDetails(countryCode) {

    const country_details_api = `https://restcountries.eu/rest/v1/alpha/${countryCode}`;
    return {
        type: COUNTRY_DETAILS,
        promise: request.get(country_details_api)
    }
}


function shouldFetchCountryDetails(state) {
    const countryDetails = state.countryDetails;

    if(countryDetails.isFetching ===false && Object.keys(countryDetails.result).length===0) {
        return true;
    }else{
        return false;
    }
}

export function fetchCountryDetailsIfNeeded(alpha3Code) {
    return (dispatch, getState) => {
        if (shouldFetchCountryDetails(getState())) {
            return dispatch(fetchCountryDetails(alpha3Code));
        }
    }
}