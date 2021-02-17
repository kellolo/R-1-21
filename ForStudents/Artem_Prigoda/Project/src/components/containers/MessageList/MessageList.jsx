import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
//stateFull


export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: 'one', text: 'Hey!' },
                { name: 'one', text: 'How are you?' }
            ],
            value: '',
        };
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
    sendMessage = () => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'one', text: this.state.value
            }]
        });
    }
    componentDidUpdate = () => {
        if (this.state.messages[this.state.messages.length - 1].name !== 'bot') {
            this.setState({
                messages: [...this.state.messages, {
                    name: 'bot', text: 'welcome'
                }]
            });
        }
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) =>
            <Message
                key={'msg_' + i}
                name={el.name}
                text={el.text}
            />);

        return <div className="telegraph">
            <div className="message-list">
                {Messages}
            </div>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button onClick={this.sendMessage}>send</button>

        </div>;

    }
};