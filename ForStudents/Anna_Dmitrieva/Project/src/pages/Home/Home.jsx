// import ReactDOM from 'react-dom';
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
        <Header chatId={ props.chatId } />
        <div className="home-page-messenger">
          <ChatList />
          <MessageField />
        </div>
      </div>
    </StylesProvider>
  );
};