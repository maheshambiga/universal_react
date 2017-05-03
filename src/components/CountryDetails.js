/**
 * Created by mambig on 7/5/2016.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CountryDetails = (props) =>{
    const {children, ...rest} = props;
    return(
        <div className="country_card word-break">

            <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                    <div className="countryDetails_cell">
                        <p className="color_95 wordBreak">Capital:</p>
                        {(props.capital) ? <p className="fontSize2">{props.capital}</p> : <p className="color_95">Data not available.</p>}
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="countryDetails_cell">
                        <p className="color_95">Region:</p>
                        {(props.region) ? <p className="fontSize2 wordBreak">{props.region}</p> : <p className="color_95">Data not available.</p>}
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="countryDetails_cell">
                        <p className="color_95">Sub-Region:</p>
                        {(props.subregion) ? <p className="fontSize2 wordBreak">{props.subregion}</p> : <p className="color_95">Data not available.</p>}
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="countryDetails_cell">
                        <p className="color_95">Currencies:</p>

                        {(props.currencies && props.currencies.length) ?
                            <p className="fontSize2">
                                {props.currencies.toString()}
                            </p> : <p className="color_95 wordBreak">Data not available.</p>}
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="countryDetails_cell">
                        <p className="color_95">Timezone:</p>

                        {(props.timezones && props.timezones.length) ?
                        <p className="fontSize2 wordBreak">
                            {props.timezones.toString()}
                        </p> : <p className="color_95">Data not available.</p>
                        }
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="countryDetails_cell">
                        <p className="color_95">Population:</p>
                        {(props.population) ? <p className="fontSize2 wordBreak">{props.population}</p> : <p className="color_95">Data not available.</p>}
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="countryDetails_cell">
                        <p className="color_95">Area:</p>
                        {(props.area) ? <div><p className="fontSize2 wordBreak">{props.area}<span>&nbsp;km<sup>2</sup></span></p></div> : <p className="color_95">Data not available.</p>}
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="countryDetails_cell">
                        <p className="color_95">Languages:</p>

                        {(props.languages && props.languages.length) ?
                        <p className="fontSize2 wordBreak">
                            {props.languages.toString()}
                        </p> : <p className="color_95">Data not available.</p>}
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="countryDetails_cell">
                        <p className="color_95">Calling Codes:</p>
                        {(props.callingCodes && props.callingCodes.length) ?
                            <p className="fontSize2 wordBreak">
                                +{props.callingCodes.toString()}
                            </p> : <p className="color_95">Data not available.</p>}
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="countryDetails_cell clearfix">
                        <p className="color_95">Borders:</p>

                        {(props.borders && props.borders.length) ?
                            <p className="fontSize2 wordBreak">
                                {props.borders.toString()}
                            </p> : <p className="color_95">Data not available.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};
CountryDetails.PropTypes={
    capital: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    subregion: PropTypes.string.isRequired,
    currencies: PropTypes.array.isRequired,
    timezones: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    callingCodes: PropTypes.string.isRequired,
    borders: PropTypes.array.isRequired
};
export default CountryDetails;