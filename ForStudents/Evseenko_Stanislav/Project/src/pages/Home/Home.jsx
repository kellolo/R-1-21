import React from 'react';
import Header from '@containers/Header';
import ChatList from '@containers/ChatList';
import MessageList from '@containers/MessageList';

import './style.scss';

export default () => {
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <ChatList />
        <MessageList />
      </div>
    </div>
  );
};