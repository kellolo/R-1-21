import React, { Component, createRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import Message from '@components/Message';
//import MessageInput from '@components/MessageInput';
import MessageHeader from '@components/MessageHeader';

import { addMessage } from '@store/chats/actions';

export default ({ userId }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const dataMessages = useSelector(state => state.chatContainer.messages);
  const currentUser = useSelector(state => state.chatContainer.active_user);
  const active_chat = dataMessages.filter(f => f.id == userId);
  const chats = useSelector(state => state.chatContainer.chats);
  const get_user = chats.filter(f => f.id == userId);
  
  const nowTime = new Date().toLocaleTimeString();
  //  const textInput = createRef();

  let current_user = '';
  if (get_user.length > 0) {
    current_user = get_user[0].name;
  };

  let messagesContent;
  if (active_chat.length > 0) {
    messagesContent = active_chat.map((item, index) => {
      return <Message key={ index } name={ item.user } text={ item.text } datetime={ item.datetime } />
    });
  };
 
  const sendMessage = () => {
    if (value !== '' ) {
      const dataOutput = {
        id: userId,
        user: "User",
        text: value,
        datetime: nowTime
      };
      dispatch(addMessage(dataOutput));
      setValue('');

      setTimeout(() => {
        const dataOutput = {
          id: userId,
          user: current_user,
          text: "Не приставай ко мне, я робот!",
          datetime: nowTime
        };
        
        dispatch(addMessage(dataOutput));
        }, 1000
      );
    };
  };

  const handleChange = (event) => {
    if (event.keyCode !== 13) {
      setValue(event.target.value);
    }
    else {
      sendMessage();
    }
  };  

  return (
    currentUser == 0 ? <div></div> :
    <div className="chat-wrap_display__content">
      <MessageHeader username={ current_user }/>
      <div className="chat-wrap_display__messages">
        { messagesContent }
      </div>
      <div className="chat-wrap_input">
        <div className="chat-wrap_input__content">
          <input 
            // ref={ textInput } 
            type="text" 
            value={ value } 
            onChange={ handleChange } 
            onKeyUp={ handleChange }
            placeholder="Введите сообщение"
          />
            <IconButton color="primary" aria-label="send" className="chat-wrap_input__button" onClick={ sendMessage }>
              <SendIcon />
            </IconButton>
        </div>
      </div>
      {/* <MessageInput className="chat-wrap_input"/> */}
    </div>
  )
};
