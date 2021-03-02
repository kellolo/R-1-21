import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

// import MessageList from '@containers/MessageList';
import ChatList from '@containers/ChatList';

export default () => {
  return <section className="chat-wrap">
    <ChatList />
    {/* <MessageList /> */}
  </section>
}
