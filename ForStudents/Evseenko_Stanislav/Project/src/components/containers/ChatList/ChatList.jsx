import React, { Component } from 'react';
import Modal from '@components/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import './style.scss';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class ChatList extends Component {

  constructor(props) {
    super(props);
  };

  render () {
    const { activeChats } = this.props;
    const chats = activeChats.map((el, i) => {
      return (
        <Link to={`/chat/${ el.id }`}  key={ `chat_${i}` } className="chat" >
          <ListItem button>
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
        <Modal />
        <List
          className="chats"
          children={ chats }
        />
      </div>
    );
  };
};

const mapStateToProps = ({ chatsReducer }) => ({
  activeChats: chatsReducer.activeChats
});

export default connect(mapStateToProps, {})(ChatList);