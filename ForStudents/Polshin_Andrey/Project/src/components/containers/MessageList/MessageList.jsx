import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import MsgInput from '@components/MsgInput';

import './style.scss';
import Message from '@components/Message';

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: 'one', text: 'Hey!' },
                { name: 'one', text: 'How are you?' }
            ]
        };
        this.msgList = React.createRef();
    }

    sendMessage = (name, text) => {
        this.setState({
            messages: [...this.state.messages, {
                name: name,
                text: text
            }]
        });
    }

    componentDidUpdate() {
        this.msgList.current.scrollTop = this.msgList.current.scrollHeight;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.messages !== nextState.messages) {
            const newMsg = nextState.messages[nextState.messages.length - 1];
            if (newMsg.name !== 'BOT') {
                setTimeout(() => this.sendMessage('BOT', 'Zadolbal :)'), 250);
            }
        }
        return true;
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) =>
            <Message
                key={'msg_' + i}
                name={el.name}
                text={el.text}
            />);

        return <div className='chat'>
            <ul
                className='chat__msg-list'
                ref={this.msgList}>
                {Messages}
            </ul>
            <MsgInput sendMsgHandler={this.sendMessage} />
        </div >

    }
};
