/**
 * Created by mambig on 7/4/2016.
 */
import {
    INVALIDATE_COUNTRY_DETAILS,
    COUNTRY_DETAILS_REQUEST,
    COUNTRY_DETAILS_SUCCESS,
    COUNTRY_DETAILS_FAILURE
} from '../actions/countryDetailsApiActions';


function countryDetailsReducer(state = {
    isFetching: false,
    error: null,
    didInvalidate: false,
    result: {}
}, action) {
    switch (action.type) {
        case INVALIDATE_COUNTRY_DETAILS:
            return Object.assign({}, state, {
                didInvalidate: true,
                result:{}
            });
        case COUNTRY_DETAILS_REQUEST:

            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false

            });
        case COUNTRY_DETAILS_SUCCESS:
            let data = [];
            if (action.req && action.req.data) {
                data = action.req.data;
            }

            return Object.assign({}, state, {
                isFetching:false,
                didInvalidate: false,
                result: data
            });
        case COUNTRY_DETAILS_FAILURE:

            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                error : (action.error ? action.error : null)
            });
        default:
            return state;
    }
}

export default countryDetailsReducer;
