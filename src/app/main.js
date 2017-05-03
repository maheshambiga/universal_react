/**
 * Created by mambig on 5/24/2016.
 */

import React from 'react';
import { render } from 'react-dom';
import { match, Router, browserHistory }  from 'react-router';
import { Provider } from 'react-redux';
import routes from '../common/routes';
import configureStore from '../store/configureStore';

const store = configureStore(window.__INITIAL_STATE__);
const mountNode = document.getElementById('root');

const onError = function(err) {
    console.error(err);
};

match({history:browserHistory, routes}, (err, redirect, props) => {
    render(
        <Provider store={store}>
            <Router {...props} onError={onError} />
        </Provider>, mountNode
    );
});