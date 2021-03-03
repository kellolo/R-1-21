import React from 'react';
import '@styles/main.scss';
import Router from './Core/Router';
import ReactDom from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ourStore from './Core/Store';

const container = document.querySelector('#app');

ReactDom.render(
    <Provider store={ ourStore() }>
        <BrowserRouter>
            <StylesProvider>
                <Router />
            </StylesProvider>
        </BrowserRouter>
    </Provider>,
    container
);

