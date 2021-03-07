import React from 'react';
import ChatList from "@containers/ChatList";
import MessageField from "@containers/MessageField";
import Header from "@components/Header";
import { StylesProvider } from '@material-ui/core/styles';

import "./style.scss";

export default (props) => {
  return (
    <StylesProvider>
      <div className="home-page">
        <Header chatIdD={ props.chatId } />
        <div className="home-page-messenger">
          <ChatList />
          { props.chatId && <MessageField /> } 
        </div>
      </div>
    </StylesProvider>
  );
};