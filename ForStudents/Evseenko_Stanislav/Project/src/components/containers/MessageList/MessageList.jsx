import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import Message from '@components/Message';

export default class MessageList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [
      ],
    };
  };

  sendMessage = () => {
    const msgInput = document.querySelector('input');
    const msgDate = new Date();
    const msgHours = msgDate.getHours() < 10 ? "0" + msgDate.getHours() : msgDate.getHours();
    const msgMinutes = msgDate.getMinutes() < 10 ? "0" + msgDate.getMinutes() : msgDate.getMinutes();

    if (msgInput.value) {
      this.setState({
        messages: [...this.state.messages, { 
          name: 'BotNaoborot', 
          text: `${ msgInput.value }`, 
          time: `${ msgHours }:${ msgMinutes }` 
        }]
      });
      msgInput.value = '';
    };
  };

  render () {
    const { messages } = this.state;
    const Messages = messages.map((el, i) =>
      <Message
        key={ i } 
        name={ el.name } 
        text={ el.text } 
        time={ el.time } 
      />
    );

    return (
      <div className="message-list">
        <div className="message-input">
          <input className="message-input__input" type="text" placeholder="Inter your message..."/>
          <button className="message-input__button" onClick={ this.sendMessage }>Send</button>
        </div>
        { Messages }
      </div>
    );
  };
};