import React, { Component } from 'react';
import ContactList from '@containers/ContactList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import { Link } from 'react-router-dom';

import './style.scss';

export default class ChatList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      activeChats: [
        {
          name: 'Гена',
          id: '1',
          text: 'Привет!',
          avatar: 'src/resources/img/avatar.jpg'
        },
        {
          name: 'Чебурашка',
          id: '2',
          text: 'Да зачем тебе этот React?!',
          avatar: 'src/resources/img/avatar2.jpg'
        },
        {
          name: 'Шапокляк',
          id: '3',
          text: 'Приходи вечером на чай!',
          avatar: 'src/resources/img/avatar3.jpg'
        }
      ]
    };
  };

  addChat = (name, id) => {
    this.setState({
      activeChats: [...this.state.activeChats,
        {
          name,
          id: `${ id }`,
          text: `Начните чат c ${ name }`,
          avatar: ''
        }]
    });
  };

  render () {
    const { activeChats } = this.state;
    const chats = activeChats.map((el, i) => {
      return (
        <Link to={`/chat/${ el.id }`}  key={ 'chat_' + i } className="chat" >
          <ListItem button onClick={ () => { console.log(el.name + el.id) } }>
            <ListItemAvatar>
              <Avatar
                src={ el.avatar }
              />
            </ListItemAvatar>
            <ListItemText
              className="chat__text"
              primary={ el.name }
              secondary={ el.text }
            />
          </ListItem>
        </Link>
        
      );
    });

    return (
      <div className="chat-list">
        <ContactList add={ this.addChat } />
        <List
          className="chats"
          children={ chats }
        />
      </div>
    );
  };
};