import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import MessageList from '@containers/MessageList';
import ChatList from '@containers/ChatList';

import { setActiveUser } from '@store/chats/actions';

export default ({ userId }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (typeof userId != 'undefined') {
      dispatch(setActiveUser(userId));
    }
  })

  return (
    <section className="chat-wrap">
      <ChatList userId={ userId } />
      <MessageList userId={ userId }/>
    </section>
  )
};
