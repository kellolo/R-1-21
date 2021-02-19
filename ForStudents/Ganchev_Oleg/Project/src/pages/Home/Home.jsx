import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';

import './style.scss';

export default () => {

    return <div className="home">
        <Header />
        <div className="home__chats">

            <ChatsList />
            <MessageList />
        </div>
    </div>;
}