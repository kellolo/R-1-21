import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import { BrowserRouter } from 'react-router-dom';
import Router from './router';

const container = document.querySelector('#app');

ReactDom.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
//    <div>
//        <App />
//    </div>,
    container
);