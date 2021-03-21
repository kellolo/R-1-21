import React, { Component } from 'react';


import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMessages, sendMessage } from '@actions/messages';


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.newMsg = React.createRef();
    };

    sendMessage = (text) => {
        const user = this.props.user.user.id;
        const chat = this.props.activeChat;

        const payload = {
            name: 'Leia',
            text: text,
            date: new Date().toLocaleTimeString()
        };

        this.props.send(payload, chat, user);
    };

    deleteMessage = () => {
        this.props.kill();
    };

    async componentDidMount() {
        await this.props.load(this.props.user.user.id, this.props.activeChat);
    };

    componentDidUpdate() {
        this.scrollToBottom();
    };

    scrollToBottom() {
        this.newMsg.current.scrollIntoView(false);
    };

    render() {
        const { messages } = this.props;
        const Messages = messages.map((el, i) =>
            <Message
                key={ `msg_${i}` }
                name={ el.name }
                text={ el.text }
                date={ el.date }
            />);
        return <div className="message-list">
            <div className="message-list__chat">
                <div className="message-list__chat_wrapper">
                    { Messages }
                </div>
                <div ref={ this.newMsg }></div>
            </div>
            <div className="message-list__input">
                <MsgInput userSend={ this.sendMessage } />
            </div>
        </div>;

    };
};

const mapState = ({ messagesReducer, userReducer }) => ({
    messages: messagesReducer.messages,
    user: userReducer
});

const mapActions = dispatch => bindActionCreators({ send: sendMessage, load: loadMessages }, dispatch);

export default connect(mapState, mapActions)(MessageList);
