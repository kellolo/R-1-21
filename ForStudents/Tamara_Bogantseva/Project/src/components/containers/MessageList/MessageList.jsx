import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';


export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: 'Bot', text: 'Hey!' },
                { name: 'Bot', text: 'How are you?' }
            ],
        };
    }

    sendMessage = (text) => {
        this.setState({
            messages: [...this.state.messages, { name: 'User', text: text }]
        });
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {  // Решение из методички, ничего пока не придумала. Надо бы через lastIndexOf как-то проверять, но пока все зацикливается
            setTimeout(() =>
                this.setState(
                    { messages: [...this.state.messages, { name: 'Bot', text: 'Не приставай ко мне, я робот!' }] }),
                1000);
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
        //MsgInput должен конечно быть в Home 
        return <div className="msg-container">
            {Messages}
            <MsgInput userSend={this.sendMessage} />
        </div>;

    }
};