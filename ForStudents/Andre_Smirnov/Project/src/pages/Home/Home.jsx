import React from 'react';
// import ReactDom from 'react-dom';
import ChatList from '@containers/ChatList';
import MessageList from '@containers/MessageList';
import MsgInput from '@components/MsgInput';

import './style.scss';

export default () => {

    return <main className="app__wrapper">
        
        <ChatList />
        {/* <MsgInput /> */}
        <MessageList />
    </main>;
}