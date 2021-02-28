import React from 'react';
import ReactDOM from 'react-dom';
// import App from '@pages/Home';

import '@styles/main.scss';
// import { StylesProvider } from '@material-ui/core/styles';

import Router from './router/';
import { BrowserRouter } from 'react-router-dom';
const container = document.querySelector('#app');

ReactDOM.render(
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