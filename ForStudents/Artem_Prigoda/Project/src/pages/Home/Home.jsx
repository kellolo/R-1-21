import React, { Component } from 'react';

import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';

import { StylesProvider } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getActiveChat } from '@actions/chats';


import './style.scss';




class Home extends Component {
    constructor(props) {
        super(props);

    }
    componentDidUpdate() {
        this.props.getActiveChat(this.props.chatId);
    }
    
    render() {
    return <StylesProvider>
                <div className="container">
                    <ChatsList chatId={ this.props.chatId } />
                    
                        <div className="messages--base">
                            <Header name={ this.props.chatId } />
                             { this.props.activeChat && <MessageList chatId={ this.props.chatId }/> }
                        </div>
                </div>
            </StylesProvider>
    }
}

const mapState = ({ chatsReducer }) => ({
    activeChat: chatsReducer.activeChat
  });
  
  const mapActions = dispatch => bindActionCreators({ getActiveChat }, dispatch);
  
  export default connect(mapState, mapActions)(Home);