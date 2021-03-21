import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';

import './style.scss';
import { StylesProvider } from '@material-ui/core';
import { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadUser } from '@actions/user';
import { loadChat } from '@actions/chats';
import { loadContacts } from '@actions/contacts';


class Home extends Component {
    async componentDidMount() {
        await this.props.loadUser();
        await this.props.loadChat(this.props.user.id);
        await this.props.loadContacts(this.props.user.id);
    }

    render() {
        return <StylesProvider>
            <div className="content">
                <Header id={ this.props.id } />
                <div className="interactive">
                {/* <MsgInput /> */}
                <ChatsList />
                { this.props.id && <MessageList chatId={ this.props.id } userId={ this.props.user.id } /> }
                </div>
            </div>
        </StylesProvider>;
    }
}

const mapState = ({ userReducer }) => ({ 
    user: userReducer.user
  });
  
  const mapActions = dispatch => bindActionCreators({ loadUser, loadChat, loadContacts }, dispatch);
  
  export default connect(mapState, mapActions)(Home);