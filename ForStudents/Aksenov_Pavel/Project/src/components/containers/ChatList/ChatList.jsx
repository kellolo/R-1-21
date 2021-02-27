import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import ChatHeader from '@components/Chats/ChatHeader';
import ChatControls from '@components/Chats/ChatControls';
import Chats from '@components/Chats';

export default class ChatList extends Component {
  render() {
    return <div className="chat-wrap_display__contacts">
      <div className="chat-wrap_display__contacts-content">
        <ChatHeader />
        <ChatControls />
        <Chats />
      </div>
    </div>
  }
};
