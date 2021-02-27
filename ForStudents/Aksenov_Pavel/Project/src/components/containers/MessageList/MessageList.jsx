import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './style.scss';

import { Button, IconButton, Icon } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

import userIcon from '@media/man.png';
import roboIcon from '@media/robo.png';

import Message from '@components/Message';
//import MessageInput from '@components/MessageInput';
import MessageHeader from '@components/MessageHeader';

const nowTime = new Date().toLocaleTimeString();

export default class MessageList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataMessages: [],
      values: ''
    };
    this.textInput = createRef();
  }

  static propTypes = {
    dataMessages: PropTypes.array,
    values: PropTypes.string
  };

  sendMessage = () => {
    if (this.state.values !== '' ) {
      this.setState(
        {
          dataMessages: [
            ...this.state.dataMessages, 
            { name: "User", text: this.state.values, datetime: nowTime, icon: userIcon }
          ],
          values: ''
        }
      );
      this.textInput.current.focus();
      setTimeout(() =>
        this.setState(
          { 
            dataMessages: [ 
              ...this.state.dataMessages, 
              { name: "Robot", text: "Не приставай ко мне, я робот!", datetime: nowTime, icon: roboIcon }
            ]
          }
        ), 1000
      );
    }
  };

  handleChange = (event) => {
    if (event.keyCode !==13) {
      this.setState({
        values: event.target.value
      })
    }
    else {
      this.sendMessage();
    }
  };

  //componentDidUpdate() {}
  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    const { dataMessages, values } = this.state;
    const messagesContent = dataMessages.map((item, index) => {
      if (item.name !=='User') {
        return <Message key={ index } name={ item.name } text={ item.text } datetime={ item.datetime } color="#FFF" icon={ item.icon }/>
      }
      return <Message key={ index } name={ item.name } text={ item.text } datetime={ item.datetime } icon={ item.icon} />
    }
    );

    return <div className="chat-wrap_display__content">
      <MessageHeader />
      <div className="chat-wrap_display__messages">
      { messagesContent }
      </div>
      <div className="chat-wrap_input">
        <div className="chat-wrap_input__content">
          <input 
            ref={ this.textInput } 
            type="text" 
            value={ values } 
            onChange={ this.handleChange } 
            onKeyUp={ this.handleChange }
            placeholder="Введите сообщение"
          />
          <IconButton color="primary" aria-label="send" className="chat-wrap_input__button" onClick={ this.sendMessage }>
            <SendIcon />
          </IconButton>
        </div>
      </div>
      {/* <MessageInput className="chat-wrap_input"/> */}
    </div>
  }
}

/*MessageList.PropTypes = {
  dataMessages: PropTypes.array
}*/