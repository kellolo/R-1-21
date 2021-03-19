import React, { Component } from 'react';

import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';

import { StylesProvider } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getActiveChat } from '@actions/chats';
import { loadUser } from '@actions/user';
import { loadContacts } from '@actions/contacts';
import { loadChats } from '@actions/chats';


import './style.scss';




class Home extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.loadUser(this.props.userLogin);
        await this.props.loadChats(this.props.user.id);
        await this.props.loadContacts(this.props.user.id);        
    }

    render() {
    return <StylesProvider>
                <div className="container">
                    <ChatsList chatId={ this.props.name } />
                    
                        <div className="messages--base">
                            <Header name={ this.props.name } />
                             { this.props.name && <MessageList chatId={ this.props.id }/> }
                        </div>
                </div>
            </StylesProvider>
    }
}

const mapStateToProps = ({ chatsReducer, userReducer, contactsReducer }) => ({
    chats: chatsReducer.chats,
    contactList: contactsReducer.contacts,
    userLogin: userReducer.login,
    user: userReducer.user,
    activeChat: chatsReducer.activeChat,
});
  
  const mapActions = dispatch => bindActionCreators({ getActiveChat, loadUser, loadContacts, loadChats }, dispatch);
  
  export default connect(mapStateToProps, mapActions)(Home);