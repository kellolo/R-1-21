
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import './style.scss';

import ChatsDialog from '@components/ChatsDialog';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat } from '@actions/chats';
import { loadUser } from '@actions/user';
import { loadContacts } from '@actions/contacts';
import { loadChats } from '@actions/chats';
import { getActiveChat } from '@actions/chats';


class Chatslist extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    async componentDidMount() {
        await this.props.loadUser(this.props.userLogin);
        await this.props.loadChats(this.props.user.id);
        await this.props.loadContacts(this.props.user.id);
        this.props.getActiveChat(this.props.chatId);
        
    }

    render() {
        
        const { chats } = this.props;
        const Chats = chats.map(chat =>
            <Link to={ `/chat/${chat.id}` } key={ chat.id }>
                <ListItemText primary={ chat.name } />
                <Divider />
            </Link>
       );
        return <div className="chatslist">
            <h2 className="chatslist--title">Чаты </h2>
            <List className="chatlist--items">
                { Chats }
            </List>
            <ChatsDialog add={this.props.addChat} list={ [...this.props.contactList] } />
        </div>;
    }
};

const mapStateToProps = ({ chatsReducer, userReducer, contactsReducer }) => ({
    chats: chatsReducer.chats,
    contactList: contactsReducer.contacts,
    userLogin: userReducer.login,
    user: userReducer.user,

});
const mapActions = dispatch => bindActionCreators({ addChat, loadUser, loadContacts, loadChats, getActiveChat }, dispatch);
export default connect(mapStateToProps, mapActions)(Chatslist);
