import React, { Component } from 'react';
import ContactsList from '@containers/ContactsList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import './style.scss';

export default class ChatList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data: [
        {
          name: 'Гена',
          text: 'Привет!',
          avatar: 'src/resources/img/avatar.jpg'
        },
        {
          name: 'Чебурашка',
          text: 'Да зачем тебе этот React?!',
          avatar: 'src/resources/img/avatar2.jpg'
        },
        {
          name: 'Шапокляк',
          text: 'Приходи вечером на чай!',
          avatar: 'src/resources/img/avatar3.jpg'
        }
      ]
    };
  };

  render () {
    const chats = this.state.data.map((el, i) => {
      return (
        <ListItem className = "chat" key = { 'chat' + i }>
          <ListItemAvatar>
            <Avatar src = { el.avatar } />
          </ListItemAvatar>
          <ListItemText
            className="chat__text"
            primary = { el.name }
            secondary = { el.text }
          />
        </ListItem>
      );
    });

    return (
      <div className="chat-list">
        <ContactsList />
        <List
          className="chats"
          children = { chats }
        />
      </div>
    );
  }
};