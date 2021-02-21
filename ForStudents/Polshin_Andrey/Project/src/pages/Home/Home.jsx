import React from 'react';
import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import Header from '@components/Header';
import ChatList from '@containers/ChatList';
import Footer from '@components/Footer';

import './style.scss';

export default () => {

    return <div className='wrapper' >
        <Header />
        <main className='main'>
            <ChatList />
            <MessageList />
        </main>
        <Footer />
    </div >;
}
