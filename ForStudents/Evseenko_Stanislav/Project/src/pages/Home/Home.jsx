import React from 'react';
import Header from '@components/Header';
import ChatList from '@containers/ChatList';
import MessageList from '@containers/MessageList';
import { StylesProvider } from '@material-ui/core/styles';

import './style.scss';

export default (props) => {
  return (
    <StylesProvider>
      <div className="layout">
        <Header heading={ props.name } />
        <div className="main">
          <ChatList />
          <MessageList chatId={ props.chatId } />
        </div>
      </div>
    </StylesProvider>
  );
};