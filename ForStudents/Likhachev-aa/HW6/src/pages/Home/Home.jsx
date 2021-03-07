import React from 'react';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';

import './style.scss';

export default (props) => {
    return <div className="home">
        <Header chatId={props.chatId} />
        <div className="home__chats">
            <ChatsList />
            <MessageList chatId={props.chatId} />
        </div>
    </div>;
}
