import React from 'react';
import ReactDOM from 'react-dom';

import MessageList from '@containers/MessageList';
import ChatList from '@containers/ChatList';

export default (props) => {
  const { params: { chatid } } = props.match;
  
  return <section className="chat-wrap">
    <ChatList userId = { Number(chatid) } />
    <MessageList userId = { Number(chatid) }/>
  </section>
}