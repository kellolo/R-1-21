import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import Header from '@components/Header';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import MsgInput from '@components/MsgInput';
import { StylesProvider } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import redux, { bindActionCreators } from 'redux';

import { loadUser } from '@actions/user'
import { loadChats } from '@actions/chats';
import { loadContacts } from '@actions/contacts';
import { loadMessages } from '@actions/messages';
import { getActiveChat } from '@actions/chats'

import './style.scss';

class Home extends Component  {
    async componentDidMount() {
        await this.props.loadUser();
        await this.props.loadChats(this.props.user.id);
        await this.props.loadContacts(this.props.user.id);
        this.props.getActiveChat(this.props.id);
    }

    render() {
        return <StylesProvider>
            <div className="wrp">
                {/* <MsgInput /> */}
                <Header name={ this.props.name }/>
                <ChatsList />
                { this.props.name && <MessageList /> }
                {/* <MessageList /> */}
            </div>
        </StylesProvider>
    }
}

const mapState = ({ userReducer }) => ({
    user: userReducer.user
});

const mapActions = dispatch => bindActionCreators({ loadUser, loadChats, loadContacts, loadMessages, getActiveChat }, dispatch);

export default connect(mapState, mapActions)(Home);