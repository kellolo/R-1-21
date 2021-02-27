import React from 'react';

import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import MsgInput from '@components/MsgInput';

import './style.scss';

export default () => {
    return <div className="">
        {/* <MsgInput /> */}
        <MessageList />
        <ChatsList />
    </div>
}