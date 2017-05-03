/**
 * Created by mambig on 7/4/2016.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as countryDetailsActions from '../actions/countryDetailsApiActions'
import CountryDetailsWrapper from '../components/CountryDetailsWrapper';

CountryDetailsWrapper.need = [
    countryDetailsActions.fetchCountryDetails
];


const mapStateToProps=(state, ownProps)=> {

    const { countryDetails } = state;
    const alpha3Code = ownProps.params.id;


    const {isFetching,error, result} = countryDetails;

    return {
        isFetching,
        error,
        result,
        alpha3Code
    }
};
const mapDispatchToProps=(dispatch)=> {
    return bindActionCreators(countryDetailsActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetailsWrapper);