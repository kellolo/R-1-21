import React, { Component } from 'react';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StylesProvider } from '@material-ui/core/styles';

import { loadUser } from '@actions/user';
import { loadChats, getActiveChat } from '@actions/chats';
import { loadContacts } from '@actions/contacts';
import { loadMessages } from '@actions/messages';

import './style.scss';

class Home extends Component {
    async componentDidMount() {
        await this.props.loadUser();
        await this.props.loadChats(this.props.user.id);
        await this.props.loadContacts(this.props.user.id);
        this.props.getActiveChat(this.props.id);
    }
    render() {
        return <StylesProvider>
            <>
                <Header name={ this.props.name } />
                <ChatsList />
                { this.props.name && <MessageList activeChat={ this.props.id } /> }
            </>
        </StylesProvider >;
    }
}

const mapState = ({ userReducer }) => ({
    user: userReducer.user
});

const mapActions = dispatch => bindActionCreators({ loadUser, loadChats, loadContacts, loadMessages, getActiveChat }, dispatch);

export default connect(mapState, mapActions)(Home);
