import React from 'react';
import ReactDOM from 'react-dom';
import App from '@pages/Home';
import '@styles/main.scss';

const container = document.querySelector('#app');

ReactDOM.render(
    <div>
        <App />
    </div>,
    container
);