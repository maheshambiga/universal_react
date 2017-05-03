/**
 * Created by mambig on 5/28/2016.
 */
import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import promiseMiddleware from '../middlewares/promiseMiddleware';
 

const loggerMiddleware = createLogger();
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = [thunkMiddleware, promiseMiddleware, loggerMiddleware];

export default function configureStore(initialState=undefined) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    )
}