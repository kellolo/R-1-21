import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import ReactDom from 'react-dom';

import './style.scss';

import ContactsList from '@containers/ContactsList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

// const avatarsPath = '../../src/resources/img/avatars/';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addChats } from '@actions/chats'

class ChatsList extends Component {
    constructor(props) {
        super(props);
    }

    addChat = (name, chatId) => {
        const userId = this.props.user.user.id;
        const payload = {
            name: name,
            text: '',
            id: chatId,
            img: ''
        }
        this.props.addChats(payload, userId);
    };

    render() {
        const { chats } = this.props;
        const Chats = chats.map((el, i) => <ListItem key={ i }>
            <ListItemAvatar>
                <Avatar alt={ el.name } src={ el.img }>
                </Avatar>
            </ListItemAvatar>
            <Link to={ `/chat/${el.id}` } className="chats-link">
                <ListItemText primary={ el.name } secondary={ el.text } />
            </Link>
        </ListItem>)
        return <div className="chatsList">
            <List>
                { Chats }
            </List>
            <ContactsList add={ this.addChat } />
        </div >;
    }
};

const mapState = ({ chatsReducer, userReducer }) => ({
    chats: chatsReducer.chats,
    user: userReducer
});

const mapActions = dispatch => bindActionCreators({ addChats }, dispatch);

export default connect(mapState, mapActions)(ChatsList);