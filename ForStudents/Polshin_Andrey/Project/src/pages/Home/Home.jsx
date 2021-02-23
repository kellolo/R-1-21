import React from 'react';

import MessageList from '@containers/MessageList';
import Header from '@components/Header';
import ChatList from '@containers/ChatList';
import Footer from '@components/Footer';

import { StylesProvider } from '@material-ui/core/styles';

import './style.scss';

export default (props) => {

    const { name = '1' } = props;

    return <StylesProvider>
        <Header chat={name} user={''} />
        <main className='main'>
            <ChatList name />
            <MessageList name />
        </main>
        <Footer />
    </StylesProvider>;

}
