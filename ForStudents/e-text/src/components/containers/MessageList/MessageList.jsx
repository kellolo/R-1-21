import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: 'Кот', text: 'Муррр...' },
                { name: 'Кот', text: 'Мяу!' },
            ],
            text: '',
        };
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }
    }

    sendMessage = () => {
        this.setState({
            text: '',
            messages: [...this.state.messages, { name: 'Человек', text: this.state.text }]
        });
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => <Message key={i} name={el.name} text={el.text} />);

        return <div className="message-list">
            <button onClick={this.sendMessage}>send</button>
            <input type="text" value={this.state.text} onChange={this.handleChange} onKeyUp={this.handleChange} />
            {Messages}
        </div>;
    }
};
