/**
 * Created by mambig on 7/1/2016.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, pu } from 'react-router';

class CountryCard extends Component{
    constructor(props){
        super(props);
        this.onNavigate = this.onNavigate.bind(this)
    }
    onNavigate(){

        this.props.onDetails();
    }

    render(){
        const {name, capital, region, alpha3Code} = this.props;
        return(

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className={"country_card margin5 onlyBottomMargin letter_"+name.substring(0,1).toUpperCase()}>
                        <h3 className="country_location margin20 onlyBottomMargin fontSize_7">
                            <span dangerouslySetInnerHTML={{__html:name}}/>
                        </h3>
                        <div className="clear6"></div>
                        <h4 className="country_location margin5 onlyBottomMargin">
                            <span>Capital: </span>
                            <span dangerouslySetInnerHTML={{__html:capital}}/>
                        </h4>
                        <div className="clear6"></div>
                        <h4 className="country_location margin10 onlyBottomMargin">
                            <span>Region: </span>
                            <span dangerouslySetInnerHTML={{__html:region}}/>
                        </h4>
                        <div className="clear12"></div>
                        <Link onClick={this.onNavigate} className="highlight" to={"/countries/"+alpha3Code}>More info...</Link>
                    </div>
                </div>

        );
    }
}
CountryCard.PropTypes = {
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    alpha3Code: PropTypes.string.isRequired
};

export default CountryCard;