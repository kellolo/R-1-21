import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './style.scss';

import ChatHeader from '@components/Chats/ChatHeader';
import ChatControls from '@components/Chats/ChatControls';
import Chats from '@components/Chats';

let chats = [];
for (let i=1; i <= 5; i++) {
  chats.push({
    id: i,
    name: "Имя Фамилия "+i,
    telephone: '+790000000'+i,
    email: 'email'+i+'@email.com',
    lastMessageShort: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laboriosam iusto molestiae?',
    icon: '',
  })
};

let contacts = [];
for (let i=6; i <= 11; i++) {
  contacts.push({
    id: i,
    name: "Имя Фамилия "+i,
    telephone: '+790000000'+i,
    email: 'email'+i+'@email.com',
    lastMessageShort: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laboriosam iusto molestiae?',
    icon: '',
  })
};

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChats: chats,
      contacts: contacts
    };
  }

  static propTypes = {
    activeChats: PropTypes.array,
    contacts: PropTypes.array,
    chatId: PropTypes.number,
  };

  newChat = id => {
    const contact_modal = this.state.contacts.filter(f => f.id != id);
    const contact_current = this.state.contacts.filter(f => f.id == id);
    const chat_active = this.state.activeChats.concat(contact_current);

    this.setState({ activeChats: chat_active });
    this.setState({ contacts: contact_modal });
  }

  render() {
    return <div className="chat-wrap_display__contacts">
      <div className="chat-wrap_display__contacts-content">
        <ChatHeader />
        <ChatControls contacts = { this.state.contacts } addChat = { this.newChat } />
        <Chats chats = { this.state.activeChats }/>
      </div>
    </div>
  }
};
