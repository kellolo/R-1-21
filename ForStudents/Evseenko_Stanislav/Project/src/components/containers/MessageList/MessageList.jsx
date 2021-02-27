import React, { Component } from 'react';
import Message from '@components/Message';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import './style.scss';

export default class MessageList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      text: ''
    };
  };

  handleChange = evnt => {
    if (evnt.keyCode !== 13) {
      this.setState({ text: evnt.target.value });
    } else {
      this.sendMessage();
    };
  };

  currentTime = () => {
    const curDate = new Date();
    const curHours = curDate.getHours() < 10 ? "0" + curDate.getHours() : curDate.getHours();
    const curMinutes = curDate.getMinutes() < 10 ? "0" + curDate.getMinutes() : curDate.getMinutes();
    return `${ curHours }:${ curMinutes }`;
  };

  sendMessage = () => {
    if(this.state.text) {
      this.setState({
        text: '',
        messages: [...this.state.messages, {
          name: 'Крыска Лариска',
          text: `${ this.state.text }`,
          time: `${ this.currentTime() }`
        }]
      });
    };
  };

  render() {
    const { messages } = this.state;
    const Messages = messages.map((el, i) =>
      <Message
        key = { i }
        name = { el.name }
        text = { el.text }
        time = { el.time }
      />
    );

    return (
      <div className="message-list">
        <div className="message-area">
          { Messages }
        </div>
        <div className="message-input">
          <input
            className="message-input__input"
            type="text"
            placeholder="Введите сообщение..."
            value = { this.state.text }
            onChange = { this.handleChange }
            onKeyUp = { this.handleChange }
          />
          <IconButton
            className="message-input__button"
            onClick = { this.sendMessage }
          >
            <SendIcon
              htmlColor="#ffffff"
            />
          </IconButton>
        </div>
      </div>
    );
  };
};