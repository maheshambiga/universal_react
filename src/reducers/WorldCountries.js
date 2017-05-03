/**
 * Created by mambig on 5/28/2016.
 */
import {
    INVALIDATE_WORLD_COUNTRIES,
    WORLD_COUNTRIES_REQUEST,
    WORLD_COUNTRIES_SUCCESS,
    WORLD_COUNTRIES_FAILURE,
    FILTER_COUNTRY
} from '../actions/countryApiActions';


function worldCountriesReducer(state = {
    isFetching: false,
    error: null,
    didInvalidate: false,
    result: [],
    searchText:""
}, action) {
    switch (action.type) {
        case INVALIDATE_WORLD_COUNTRIES:

            return Object.assign({}, state, {
                isFetching:false,
                didInvalidate: true
            });
        case WORLD_COUNTRIES_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case WORLD_COUNTRIES_SUCCESS:
            let data = [];
            if(action.req && action.req.data){
                data = action.req.data;
            }

            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                result: data
            });

        case WORLD_COUNTRIES_FAILURE:

            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                error : (action.error ? action.error : null)
            });

        case FILTER_COUNTRY:
            return Object.assign({}, state, {
                searchText:action.searchText
            });
        default:
            return state;
    }
}

export default worldCountriesReducer;
