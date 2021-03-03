import React, { Component } from 'react';

import './style.scss';

import Message from '@components/Message';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class MessageList extends Component {
    constructor(props) {
        super(props);
        this.msgList = React.createRef();
    }

    componentDidUpdate() {
        this.msgList.current.scrollTop = this.msgList.current.scrollHeight;
    }

    render() {
        const { chatID, chats, messages } = this.props;
        const Messages = chats[chatID].messageList.map((messageId, index) =>
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

        </div >

    }
};

const mapStateToProps = ({ chatsReducer, messagesReducer }) => ({
    chats: chatsReducer.chats,
    messages: messagesReducer.messages
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);