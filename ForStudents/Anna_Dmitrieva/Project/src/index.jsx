import React from 'react';
import ReactDOM from 'react-dom';
// import App from '@pages/Home';

import '@styles/main.scss';
// import { StylesProvider } from '@material-ui/core/styles';

import Router from './Core/router/';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ourStore from './Core/Store';

const container = document.querySelector('#app');

ReactDOM.render(
    <Provider store={ ourStore() }>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    // <StylesProvider>
    //     <div>
    //         <App />
    //     </div>
    // </StylesProvider>,
    container
);