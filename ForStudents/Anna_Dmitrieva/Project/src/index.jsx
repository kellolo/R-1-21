import React from 'react';
import ReactDOM from 'react-dom';
import App from '@pages/Home';

import '@styles/main.scss';
import { StylesProvider } from '@material-ui/core/styles';

const container = document.querySelector('#app');

ReactDOM.render(
    <StylesProvider>
        <div>
            <App />
        </div>
    </StylesProvider>,
    container
);