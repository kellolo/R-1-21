import React from 'react';
import ReactDom from 'react-dom';
import App from '@pages/Home';
import '@styles/main.scss';

const container = document.querySelector('#app');

ReactDom.render(
    <div>
        <App />
    </div>,
    container
);