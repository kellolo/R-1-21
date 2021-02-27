import React from 'react';
import '@styles/main.scss';
import Router from '@containers/Router';
import ReactDom from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter } from "react-router-dom";

const container = document.querySelector('#app');

ReactDom.render(
    <BrowserRouter>
        <StylesProvider>
            <Router />
        </StylesProvider>
    </BrowserRouter>,
    container
);

