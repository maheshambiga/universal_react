/**
 * Created by mambig on 7/12/16.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from './googleMaps/index';
class CountryMap extends Component {

    constructor(props){
        super(props)
    }
    createMapOptions () {
        return {
            panControl: true,
            mapTypeControl: false,
            scrollwheel: true,
            styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
        }
    }

    render(){
        const latlng = this.props.latlng;
        const center = {lat:latlng[0], lng:latlng[1]};
        const zoom = 4;
        return(
            <div className="country_card googlemap_holder">

                <GoogleMap
                    center={center}
                    zoom={zoom}
                    bootstrapURLKeys={this.props.gMapApiKey}
                    options={this.createMapOptions.bind(this)} >
                </GoogleMap>
            </div>
        );
    }




}
CountryMap.PropTypes={

};
CountryMap.defaultProps = {
    gMapApiKey : {key:"AIzaSyC4rIqV13xSJmN5FNycRJKSBt9Z_HWdQLY"}
};
export default CountryMap;