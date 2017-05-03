/**
 * Created by mambig on 7/12/16.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import GoogleMapMap from './Google_map_map';
import GoogleMapLoader from './Google_map_loader';

class GoogleMap extends Component{


    constructor(props){
        super(props);

        this.mounted_ = false;
        this.initialized_ = false;
        this.googleApiLoadedCalled_ = false;
        this.googleMapLoader = GoogleMapLoader;

        if (this.props.center === undefined && this.props.defaultCenter === undefined) {
            console.warn('GoogleMap: center or defaultCenter' +  // eslint-disable-line no-console
                'property must be defined');
        }

        if (this.props.zoom === undefined && this.props.defaultZoom === undefined) {
            console.warn('GoogleMap: zoom or defaultZoom' + // eslint-disable-line no-console
                'property must be defined');
        }

    }
    _isCenterDefined(center){
        return (center && (
            (typeof center === "object" && !isNaN(center.lat) && !isNaN(center.lng)) ||
            (Array.isArray(center) && center.length === 2 && !isNaN(center[0]) && !isNaN(center[1])))
    )};

    _initMap (){
        if (this.initialized_) {
            return;
        }
        this.initialized_ = true;


        const bootstrapURLKeys = {...this.props.bootstrapURLKeys};
        const options = typeof this.props.options === 'function' ? this.props.options() : this.props.options;

        const propsOptions = {
            zoom: this.props.zoom || this.props.defaultZoom,
            center: this.props.center || this.props.defaultCenter,
        };



        const mapOptions = {
            ...propsOptions,
            ...options
        };

        const {center, ...restOptions} = mapOptions;



        this.googleMapLoader(bootstrapURLKeys).then(maps=>{

            if (!this.mounted_) {
                return;
            }


            if(this.refs.google_map_dom !== null && this.refs.google_map_dom!==undefined){
                let mapCenter = new google.maps.LatLng(center.lat, center.lng);

                let map = new google.maps.Map(ReactDOM.findDOMNode(this.refs.google_map_dom), {center:mapCenter, ...restOptions});

                const marker = new google.maps.Marker({
                    position: mapCenter,
                    animation: google.maps.Animation.BOUNCE
                });
                marker.setMap(map);
            }


        })
    };
    componentWillReceiveProps(nextProps) {

    }
    componentDidMount(){
        this.mounted_ = true;


        if (this._isCenterDefined(this.props.center || this.props.defaultCenter)) {
            this._initMap();

        }

    }

    render(){
        return(
            <div>
                <GoogleMapMap ref="google_map_dom" />
            </div>
        );
    }
}


GoogleMap.defaultProps = {
    defaultCenter: {lat: 59.938043, lng: 30.337157},
    defaultZoom: 9
};
export default GoogleMap;
