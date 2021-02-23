import React from 'react';
import ReactDom from 'react-dom';
import '@styles/main.scss';
import App from '@pages/Home';
import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();
const container = document.querySelector('#app');

ReactDom.render(
    <ThemeProvider theme={theme}>
        <StylesProvider>
            <div className="chat">
                <CssBaseline />
                <App />
            </div>
        </StylesProvider>
    </ThemeProvider>,
    container
);