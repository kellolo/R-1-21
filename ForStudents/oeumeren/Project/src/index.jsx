import React from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Router from "./router";

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
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("app")
)