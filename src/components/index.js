/**
 * Created by mambig on 6/13/2016.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import PageHeader from './Header';
import CountryCard from './CountryCard';

class Countries extends Component{
    constructor(props){
        super(props);
        this.invalidateCountryDetails = this.invalidateCountryDetails.bind(this);
    }

    componentDidMount(){
        this.props.fetchWorldCountriesIfNeeded();

    }

    invalidateCountryDetails(){
        this.props.invalidateCountryDetailsResponse();
    }

    render(){
        const { isFetching, error, result} = this.props;


        return (

            <div>
                {this.props.children}
                {isFetching && error===null &&
                    <Loader />
                }
                {!isFetching && error!==null &&
                    <h2>{error.message}</h2>
                }
                {!isFetching && error===null &&

                <div>
                    <PageHeader searchCountry={this.props.filterCountry} pageTitle={"Countries"} isHomeView={true}/>
                    <div className="container">
                        {result.length>0 ? <div className="row">

                                {result.map((country, id)=>(
                                    <CountryCard key={id}
                                        {...country}
                                        onDetails={this.invalidateCountryDetails}/>
                                ))}

                            </div> : <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <p className="fontSize2 text-center">No data found!</p>
                                </div>
                            </div>}
                    </div>
                </div>
                }
            </div>
        )
    }
}

Countries.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    result:PropTypes.array.isRequired

};

export default Countries;