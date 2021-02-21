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
            ],
            answerTo: ''
        };
    }

    sendMessage = (name, text) => {
        this.setState({
            messages: [...this.state.messages, {
                name: name,
                text: this.state.answerTo ? `${this.state.answerTo},${text}` : text
            }],
            ansferTo: ''
        });
    }

    answerTo = (name) => {
        this.setState({
            answerTo: name
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.messages !== nextState.messages) {
            const newMsg = nextState.messages[nextState.messages.length - 1];
            if (newMsg.name !== 'BOT') {
                setTimeout(() => this.sendMessage('BOT', 'Zadolbal :)'), 1000);
            }
        }
        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        const { messages, answerTo } = this.state;
        const Messages = messages.map((el, i) =>
            <Message
                key={'msg_' + i}
                name={el.name}
                text={el.text}
                answerHandler={this.answerTo}
            />);

        return <div>
            <ul className='msg-list'>
                {Messages}
            </ul>
            <MsgInput sendMsgHandler={this.sendMessage}
                to={answerTo} />;
        </div>

    }
};
