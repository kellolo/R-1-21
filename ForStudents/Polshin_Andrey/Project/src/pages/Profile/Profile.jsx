import React from 'react';


import Header from '@components/Header';
import Footer from '@components/Footer';
import { StylesProvider } from '@material-ui/core/styles';

import './style.scss';

export default (props) => {
    return <StylesProvider>
        <Header />
        <main className='main'>
        </main>
        <Footer />
    </StylesProvider>;
}