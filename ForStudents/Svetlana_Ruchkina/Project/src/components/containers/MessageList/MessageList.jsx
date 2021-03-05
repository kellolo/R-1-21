import React, { Component } from 'react';

import './style.scss';
import Message from '@components/Message';
//stateFull


export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: 'bot', text: 'Hey!' },
                { name: 'bot', text: 'How are you?' }
            ],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    sendMessage = () => {
        this.setState({
            value: '',
            messages: [...this.state.messages, {
                name: 'me', text: this.state.value
            }]
        });
    }

    handleChange = event => {
        if (event.keyCode !== 13) {
            this.setState({ value: event.target.value });
        } else {
            this.sendMessage();
        }
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, {
                        name: 'bot', text: 'i see you'
                    }]
                });
            }, 1000);
        }
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) =>
            <Message
                key={i}
                name={el.name}
                text={el.text}
            />);

        return <div className="msg-list">
            {Messages}
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                onKeyUp={this.handleChange}
            />
            <button onClick={this.sendMessage}>Отправить</button>
        </div>;

    }
};
