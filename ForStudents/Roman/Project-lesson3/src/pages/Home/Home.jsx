import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';

import './style.scss';

export default () => {

    return <div>
        <MessageList />
        <ChatsList />
    </div>;
}