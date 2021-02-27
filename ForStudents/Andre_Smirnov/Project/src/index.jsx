import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

// import App from '@pages/Home';
import Router from './router/';
import { BrowserRouter } from 'react-router-dom';

const container = document.querySelector('#app');

ReactDom.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,

    // <div>
    //     <App />
    // </div>,
    container
);