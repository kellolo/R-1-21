import React, { Component } from 'react';


import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMessages } from '@actions/messages';


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.newMsg = React.createRef();
    }

    sendMessage = (text) => {
        this.setState({
            messages: [...this.props.messages, { name: 'Leia', text: text }],
        });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.newMsg.current.scrollIntoView(false);
    }

    render() {
        const { messages } = this.props;
        const Messages = messages.map((el, i) =>
            <Message
                key={ `msg_${i}` }
                name={ el.name }
                text={ el.text }
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

    }
};

const mapState = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});

const mapActions = dispatch => bindActionCreators({ load: loadMessages }, dispatch);

export default connect(mapState, mapActions)(MessageList);
