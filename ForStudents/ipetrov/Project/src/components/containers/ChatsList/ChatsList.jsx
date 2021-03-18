
import React, { Component } from 'react';
import './style.scss';
import ContactsList from '@containers/ContactsList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat, removeChat } from '@actions/chats';
import { addMessageStore, openNewChat } from '@actions/messages';



class ChatsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    };

    async componentDidMount() {
        await this.props.open();
    }

    addChat = (chatId, name) => {
        // добавим контакт в список чатов
        this.props.add(chatId, name);
        this.props.addMsgStr(chatId);
    };

    removeChat = (chatId) => {
        this.props.remove(chatId);
    };

    render() {
        return <div className="chatslist">
            <ContactsList addChat={ this.addChat } removeChat={ this.removeChat } activeChats={ this.props.activeChats } open={ this.props.open } />
        </div>;
    };
};

const mapState = ({ chatsReducer }) => ({ 
    activeChats: chatsReducer.activeChats
});

const mapActions = dispatch => bindActionCreators({ add: addChat, remove: removeChat, addMsgStr: addMessageStore, open: openNewChat }, dispatch);

export default connect(mapState, mapActions)(ChatsList);