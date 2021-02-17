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
                { name: 'User', text: 'Hello' },
                { name: 'User', text: 'May be start?' }
            ],
            answer: ''
        };
    }

    sendMessage = (name, text) => {
        this.setState({
            messages: [...this.state.messages, {
                name: name,
                text: this.state.answer ? `${this.state.answer},${text}` : text
            }],
            answer: ''
        });
    }

    answer = (name) => {
        this.setState({
            answer: name
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.messages !== nextState.messages) {
            const newMsg = nextState.messages[nextState.messages.length - 1];
            if (newMsg.name !== 'BOT') {
                setTimeout(() => this.sendMessage('bot', 'Iam your helper'), 1000);
            }
        }
        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        const { messages, answer } = this.state;
        const Messages = messages.map((el, i) =>
            <Message
                key={'msg_' + i}
                name={el.name}
                text={el.text}
                ansferHandler={this.answer}
            />);

        return <div>
            <ul className='msg-list'>
                {Messages}
            </ul>
            <MsgInput sendMsgHandler={this.sendMessage}
                to={answer} />;
        </div>

    }
};