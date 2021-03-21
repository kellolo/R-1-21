import React from 'react';
import ReactDOM from 'react-dom';
// import App from '@pages/Home';
// import { StylesProvider } from '@material-ui/core/styles';

import Router from './Core/router/';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import ourStore from './Core/Store';
import { history, initStore } from './Core/Store/index';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import '@styles/main.scss';

const { store, persistor } = initStore();
const container = document.querySelector('#app');

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={ history }>
            {/* <BrowserRouter> */}
                <Router />
            {/* </BrowserRouter> */}
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    // <StylesProvider>
    //     <div>
    //         <App />
    //     </div>
    // </StylesProvider>,
    container
);