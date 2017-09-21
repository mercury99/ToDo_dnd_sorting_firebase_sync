import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';
import {firebaseMiddleware} from "../middleware";

const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore() {
    const middlewares = [
        firebaseMiddleware,
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
        devtools(),
    ];

    return createStore(
        rootReducer,
        {},
        compose(...enhancers)
    );
}