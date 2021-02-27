import React from 'react';
import ReactDom from 'react-dom';
import App from '@pages/Home';
import '@styles/main.scss';

import Router from './router';
import { BrowserRouter, Route } from 'react-router-dom';

const container = document.querySelector('#app');

ReactDom.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    // <StylesProvider>
    //     <div>
    //         <App />
    //     </div>
    // </StylesProvider>,
    container
);