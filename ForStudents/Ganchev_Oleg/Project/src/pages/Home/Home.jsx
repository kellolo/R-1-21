import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';

import './style.scss';

export default (props) => {
    const chatId = props.chatId || 0;

    return <div className="home">
        <Header chatId={ chatId } />
        <div className="home__chats">
            <ChatsList />
            <MessageList chatId={ chatId } />
        </div>
    </div>;
}
