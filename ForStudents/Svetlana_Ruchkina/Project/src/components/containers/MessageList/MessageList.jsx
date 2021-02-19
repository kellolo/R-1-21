import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
//import MsgInput from '@components/MsgInput';
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
            messages: [...this.state.messages, {
                name: 'me', text: this.state.value
            }]
        });
    }

    handleChange() {
        this.setState({ value: event.target.value });
        //console.log("что-то ввелось")
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                //console.log('массив сообщений чатика дополнился');
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

        return <div>
            <input type="text" onChange={this.handleChange} />
            <button onClick={this.sendMessage}>Отправить</button>
            {Messages}
        </div>;

    }
};
