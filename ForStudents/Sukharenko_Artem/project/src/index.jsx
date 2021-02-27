import React from 'react';
import ReactDom from 'react-dom';
import Router from './router/';
import { BrowserRouter } from 'react-router-dom';

import '@styles/main.scss';

const container = document.querySelector('#app');

ReactDom.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    container
);