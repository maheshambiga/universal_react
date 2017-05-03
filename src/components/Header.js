/**
 * Created by mambig on 7/1/2016.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import debounce from 'lodash.debounce';

class PageHeader extends Component{

    constructor(props){
        super(props);
        this.triggerSearch = debounce(this.triggerSearch.bind(this), 200);
        this.redirectHome = this.redirectHome.bind(this)
    }
    redirectHome(){
        window.location.href = '/';
    }
    triggerSearch(){
        let el = document.getElementById("searchField");
        this.props.searchCountry(el.value);
    }

    render(){
        const {pageTitle, isHomeView, isCountryDetailsView} = this.props;
        return(
            <div className="header">

                {isHomeView &&
                <div>
                    <h1 className="headerTitle text-center" href="/countries">{pageTitle}</h1>
                    <input id="searchField" placeholder="Search" type="text" className="devsiteSearchField_input devsite-search-query" onChange={this.triggerSearch.bind(this)} />
                </div>
                }
                {isCountryDetailsView &&
                <div>
                    <h1 className="headerTitle color_FF text-center">{pageTitle}</h1>
                    <span className="icon-back ion-arrow-left-c c-homeBtnn text-center" onClick={this.redirectHome}></span>
                </div>
                }

            </div>
        );
    }
}


PageHeader.PropTypes={
    pageTitle: PropTypes.string.isRequired,
    isHomeView: PropTypes.bool.isRequired,
    isCountryDetailsView: PropTypes.bool.isRequired


};
export default PageHeader;