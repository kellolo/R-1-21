import React, { Component } from 'react';
import Message from '@components/Message';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import './style.scss';

export default class MessageList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chats: {
        1: { title: 'Чат 1', messageList: [] },
        2: { title: 'Чат 2', messageList: [] },
        3: { title: 'Чат 3', messageList: [] },
        4: { title: 'Чат 4', messageList: [] },
        5: { title: 'Чат 5', messageList: [] },
        6: { title: 'Чат 6', messageList: [] },
      },
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
    const { messages, chats, text } = this.state;
    const { chatId } = this.props;

    if(text) {
      const messageId = messages.length + 1;

      this.setState({
        text: '',
        messages: [...messages,
          {
            id: messageId,
            name: 'Я',
            text: text,
            time: `${ this.currentTime() }`
          }
        ],
        chats: {...chats,
          [chatId]: {...chats[chatId],
            messageList: [...chats[chatId]['messageList'], messageId]
          }
        }
      });
    };
  };

  render() {
    const { messages, chats, text } = this.state;
    const { chatId } = this.props;
    let messagesList = null;

    if (chatId) {
      messagesList = chats[chatId].messageList.map((el, i) =>
        <Message
          key={ i }
          name={ messages[el - 1].name }
          text={ messages[el - 1].text }
          time={ messages[el - 1].time }
        />
      );
    };
    
    return (
      <div className="message-list">
        <div className="message-area">
          { messagesList != null ? messagesList : <div></div> }
        </div>
        <div className="message-input">
          <input
            className="message-input__input"
            type="text"
            placeholder="Введите сообщение..."
            value={ text }
            onChange={ this.handleChange }
            onKeyUp={ this.handleChange }
          />
          <IconButton
            className="message-input__button"
            onClick={ this.sendMessage }
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