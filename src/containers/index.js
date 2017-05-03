/**
 * Created by mambig on 5/28/2016.
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as countryApiActions from '../actions/countryApiActions';
import * as countryDetailsActions from '../actions/countryDetailsApiActions'
import WorldCountriesApp from '../components/index';


WorldCountriesApp.need = [
    countryApiActions.fetchWorldCountries
];

const filteredItems=(items, searchText)=>{
    return items.filter((item)=>{
        return String(item.name).toLocaleLowerCase().startsWith(String(searchText).toLocaleLowerCase());
    })
};
const mapStateToProps=(state)=> {
    const { worldCountries } = state;

    const {isFetching,error, result, searchText } = worldCountries;

    return {
        isFetching,
        error,
        result:filteredItems(result, searchText) || []
    }
};

const mapDispatchToProps=(dispatch)=> {
    return bindActionCreators(Object.assign({},countryApiActions,countryDetailsActions) , dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WorldCountriesApp);