import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import MsgInput from '@components/MsgInput';

import './style.scss';
import Message from '@components/Message';

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: {
                0: { text: "Привет!", sender: 'BOT' },
                1: { text: "Здравствуйте!", sender: 'BOT' },
            }
        };

        this.msgList = React.createRef();
    }

    handleSendMessage = (sender, message) => {
        const { messages } = this.state;
        const { chat, addMsgToChat } = this.props;
        const messageId = Object.keys(messages).length + 1;

        this.setState({
            messages: {
                ...messages,
                [messageId]: { text: message, sender: sender }
            }
        });
        addMsgToChat(chat.id, messageId);
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender !== 'BOT') {
            setTimeout(() =>
                this.handleSendMessage('BOT', 'Не приставай ко мне, я робот!'), 150);
        }
        this.msgList.current.scrollTop = this.msgList.current.scrollHeight;
    }

    render() {
        const { messages } = this.state;
        const { chat } = this.props;

        const Messages = chat.messageList.map((messageId, index) =>
            <Message
                key={index}
                sender={messages[messageId].sender}
                text={messages[messageId].text}
            />);

        return <div className='chat'>
            <ul
                className='chat__msg-list'
                ref={this.msgList}>
                {Messages}
            </ul>
            <MsgInput sendMsgHandler={this.handleSendMessage} />
        </div >

    }
};
