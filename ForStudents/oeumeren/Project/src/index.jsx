import React from "react";
import ReactDOM from 'react-dom';

import Home from "@pages/Home";

import { StylesProvider, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
    <ThemeProvider theme={theme}>
        <StylesProvider>
            <Home />
        </StylesProvider>
    </ThemeProvider>,
    document.getElementById("app")
)