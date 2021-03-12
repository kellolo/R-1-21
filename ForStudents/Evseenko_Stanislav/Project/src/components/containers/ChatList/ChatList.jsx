import React, { Component } from 'react';
import Modal from '@components/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import './style.scss';

// import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { push } from 'connected-react-router';

class ChatList extends Component {

  constructor(props) {
    super(props);
  };

  handleNavigate = (link) => {
    this.props.push(link);
  };

  render () {
    const { activeChats } = this.props;
    const chats = activeChats.map((el, i) => {
      return (
        <ListItem
          button
          className="chat"
          key={ `chat_${i}` }
          onClick={ () => this.handleNavigate(`/chat/${ el.id }`) }
        >
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

const mapActions = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapActions)(ChatList);