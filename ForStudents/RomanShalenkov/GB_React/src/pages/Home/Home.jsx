import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@conteiners/MessageList';
// import MessageInput from '@components/MessageInput';
// import ChatsList from '@conteiners/ChatsList';
import Headers from '@components/Headers';

import './style.scss';

export default () => {
    return <div>
        <Headers />
        <MessageList />
        {/* <ChatsList /> */}
    </div>
}