import React, { Component } from 'react';
import Message from '@components/Message';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendMessage, writeText } from '@actions/messages';
import { updateChats, lastMessage } from '@actions/chats';

import './style.scss';

class MessageList extends Component {

  constructor(props) {
    super(props);
  };

  handleChange = evnt => {
    if (evnt.keyCode !== 13) {
      this.props.writeText(evnt.target.value);
    } else {
      this.sendMessage();
    };
  };

  sendMessage = () => {
    const { messages, chatId, text } = this.props;

    if(text) {
      const messageId = messages.length + 1;
      this.props.sendMessage(chatId, messageId, 'Я', text);
      this.props.updateChats(chatId, messageId);
      this.props.lastMessage(chatId, text);
      this.props.writeText('');
      
      const LastMessage = document.querySelector('.message-area').lastChild;
      if(LastMessage) {
        LastMessage.scrollIntoView({ block: "end", behavior: "smooth" });
      };
    };
  };

  render() {
    const { messages, chats, chatId, text } = this.props;
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
          { messagesList || <div></div> }
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

const mapStateToProps = ({ messagesReducer, chatsReducer }) => ({
  messages: messagesReducer.messages,
  chats: chatsReducer.chats,
  text: messagesReducer.text,
});

const mapActions = dispatch => bindActionCreators({ sendMessage, updateChats, writeText, lastMessage }, dispatch);

export default connect(mapStateToProps, mapActions)(MessageList);