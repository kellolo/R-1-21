import React from "react";
import ReactDOM from 'react-dom';

import Router from "./Core/router";
import {Provider} from "react-redux";
import initStore, {history} from "./Core/Store";
import {ConnectedRouter} from "connected-react-router";
import {PersistGate} from 'redux-persist/integration/react';

import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import "@styles/main.scss";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9699B8',
            main: '#555770',
            dark: '#454654',
            contrastText: '#fff'
        }
    }
});

const {store, persistor} = initStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <ThemeProvider theme={theme}>
                    <Router/>
                </ThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById("app")
);