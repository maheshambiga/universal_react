/**
 * Created by mambig on 5/24/2016.
 */

import path from 'path';
import express from 'express';
const argv = require('minimist')(process.argv.slice(2));
import {appStarted, error} from '../internals/scripts/helpers/logger';

import setup from './middlewares/frontendMiddleware';
const resolve = require('path').resolve;
const app = express();

import React from 'react';
import {Provider} from 'react-redux';
import ReactDOMServer  from 'react-dom/server'
import {RouterContext, match} from 'react-router';

import routes from '../src/common/routes';
import configureStore from '../src/store/configureStore'
import {fetchComponentDataBeforeRender} from '../src/middlewares/fetchComponentDataBeforeRender';


const port = argv.port || process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, 'public');

const hbs = require('hbs');
// set the view engine to use handlebars
app.set('view engine', 'hbs');
app.set('views', __dirname + './../src/public');

/**
 * apply webpack bundling configuration
 */
setup(app, {
    outputPath: resolve(process.cwd(), 'build'),
    publicPath: '/',
});


app.get("/*", (req, res, next) => {

    const location = req.url;

    let store = configureStore();
    /**
     * matches a set of routes to the current location
     */
    match({routes, location}, (err, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (err) {
            return res.status(500).send(err.message)
        } else if (renderProps == null) {
            return res.status(404).send("Not Found!");
        }

        /**
         * defers until API call is made and response has returned
         */
        fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
            .then(html => {

                let state = store.getState();

                let initialView = (
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                );

                let componentHTML = ReactDOMServer.renderToString(initialView);

                res.render('index', {
                    initialState: JSON.stringify(state),
                    htmlString: componentHTML
                });
            })
            .catch(err => {

                res.render('index', {
                    initialState: JSON.stringify({}),
                    htmlString: err.toString()
                });
            });

    });
});

if (port) {
    app.listen(port, (err) => {
        if (err) {
            error(err);
        }else{
            appStarted(port);
        }

    });
} else {
    error('==>     ERROR: No PORT environment variable has been specified');
}

