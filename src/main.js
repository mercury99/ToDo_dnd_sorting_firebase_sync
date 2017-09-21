import React from "react";
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'react-hot-loader/patch';
import { Provider } from "react-redux";

import App from "./components/App";
import configureStore from "./store";

const store = configureStore();

render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept('./components/App.js', () => {
        const NextRootContainer = require('./components/App.js').default;
        render(
            <AppContainer>
                <Provider store={store}>
                    <NextRootContainer/>
                </Provider>
            </AppContainer>,
            document.getElementById("root")
        );
    })
}