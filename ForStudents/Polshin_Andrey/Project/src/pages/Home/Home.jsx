import React from 'react';

import MessageList from '@containers/MessageList';
import Header from '@components/Header';
import ChatList from '@containers/ChatList';
import Footer from '@components/Footer';
import MsgInput from '@components/MsgInput';
import { StylesProvider } from '@material-ui/core/styles';

import './style.scss';

export default (props) => {
    const { id } = props.match.params;
    const chatID = id ? id : '0';
    return (
        <StylesProvider>
            <Header chatID={chatID} user={''} />
            <main className='main'>
                <ChatList chatID={chatID} />
                <MessageList chatID={chatID} />
                <MsgInput chatID={chatID} />
            </main>
            <Footer />
        </StylesProvider>);
}
