import React, { Component } from 'react';
import './style.scss';
import Messages from '@components/Messages';
import MsgInput from '@components/MsgInput';

export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'user', text: 'Hey!', style: 'message__me' },
                { name: 'user', text: 'How are you?', style: 'message__me' }
            ],
            userAnswer: false,
        };
    }

    sendMessage = (text) => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'user', text: text, style: 'message__me'
            }],
            userAnswer: true,
        });
    };

    render() {
        return <div className="message-list">
            <div className="message-list__msg">
                <Messages messages={ this.state.messages }/>
            </div>
            <div className="message-list__input">
                <MsgInput sendMessage={ this.sendMessage }/>
            </div>
        </div>;
    }

    componentDidUpdate() {
        setTimeout(() => {
            if (this.state.userAnswer) {
                this.setState({
                    messages: [...this.state.messages, { name: 'bot', text: 'answer', style: 'message__bot' }],
                    userAnswer: false,
                    }
                );
            }
        }, 2000);
    }
};
