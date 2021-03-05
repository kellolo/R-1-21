import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './style.scss';

import ChatHeader from '@components/Chats/ChatHeader';
import ChatControls from '@components/Chats/ChatControls';
import Chats from '@components/Chats';

import { getContacts, getChats } from '@store/chats/actions';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // build chats
    for (let i = 1; i <= 5; i++) {
      chats.push({
        id: i,
        name: "Имя Фамилия " + i,
        telephone: '+790000000' + i,
        email: 'email' + i + '@email.com',
        lastMessageShort: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laboriosam iusto molestiae?',
        icon: '',
      })
    };
    dispatch(getChats(chats));

    // build contacts
    for (let i = 6; i <= 20; i++) {
      contacts.push({
        id: i,
        name: "Имя Фамилия " + i,
        telephone: '+790000000' + i,
        email: 'email' + i + '@email.com',
        lastMessageShort: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laboriosam iusto molestiae?',
        icon: '',
      })
    };
    dispatch(getContacts(contacts));

  }, []);

  let chats = [];
  let contacts = [];


  return (
    <div className="chat-wrap_display__contacts">
      <div className="chat-wrap_display__contacts-content">
        <ChatHeader />
        <ChatControls />
        <Chats />
      </div>
    </div>
  )
};
