/**
 * Created by mambig on 7/4/2016.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import PageHeader from './Header';
import CountryDetails from "../containers/CountryDetails";
import CountryMap from './CountryMap';

class CountryDetailsWrapper extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){

        this.props.fetchCountryDetailsIfNeeded(this.props.alpha3Code);

    }
   

    render(){
        const { isFetching, error, result} = this.props;

        return (

            <div>

                {isFetching && error===null &&
                    <Loader />
                }
                {!isFetching &&  error!==null &&
                    <h2>{error.message}</h2>
                }
                {!isFetching && error===null && result && Object.keys(result).length>0 &&

                    <div>
                        <PageHeader  pageTitle={result.name} isCountryDetailsView={true}/>

                        <div className="container">

                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <CountryDetails {...result}/>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <CountryMap latlng={result.latlng}  />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

CountryDetailsWrapper.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    result:PropTypes.object.isRequired
};

export default CountryDetailsWrapper;