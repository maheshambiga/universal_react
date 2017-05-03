/**
 * Created by mambig on 5/25/2016.
 */

import React from 'react';
import {Router, Route,IndexRoute, browserHistory } from 'react-router';


import DisplayCountires from '../containers';
import CountryDetailsWrapper from '../containers/CountryDetailsWrapper';


export default (
    <Route path="/">
        <IndexRoute component={DisplayCountires} />
        <Route path="countries/:id" component={CountryDetailsWrapper} />
    </Route>

);