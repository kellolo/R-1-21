import React from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import Router from "./Core/router";

import { Provider } from "react-redux";
import initStore from "./Core/Store";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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

ReactDOM.render(
    <Provider store={ initStore() }>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Router/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);