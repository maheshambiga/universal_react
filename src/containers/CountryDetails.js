/**
 * Created by mambig on 7/11/16.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import humanFormat from 'human-format';

import CountryDetails from '../components/CountryDetails';
import countryCodes from '../API/slim-3';
import languageCodes from '../API/language-codes';

const nFormatter = (num, digits)=> {
    const si = [
        { value: 1E18, symbol: "E" },
        { value: 1E15, symbol: "P" },
        { value: 1E12, symbol: "T" },
        { value: 1E9,  symbol: "G" },
        { value: 1E6,  symbol: "M" },
        { value: 1E3,  symbol: "k" }
    ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (let i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
        }
    }
    return num.toFixed(digits).replace(rx, "$1");
};


const mapStateToProps=(state, ownProps)=> {

    let {area, population, borders, languages, ...rest} = ownProps;

    borders = borders.map((borderCode)=>{
        const country = countryCodes.find((country)=>{return country["alpha-3"] === borderCode});
        return country["name"];
    });

    languages = languages.map((langCode)=>{
        const language = languageCodes.find((language)=>{return language["code"] === langCode});
        return language["name"];
    });

    population = nFormatter(population, 2);

    area = humanFormat(area);

    return {
        area,
        population,
        borders,
        languages,
        ...rest
    }
};


export default connect(mapStateToProps)(CountryDetails);