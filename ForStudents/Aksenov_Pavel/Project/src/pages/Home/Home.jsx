import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import MessageList from '@containers/MessageList';
import ContactsList from '@containers/ContactsList';

export default () => {
  return <section className="chat-wrap">
    <ContactsList />
    <MessageList />
  </section>
}
