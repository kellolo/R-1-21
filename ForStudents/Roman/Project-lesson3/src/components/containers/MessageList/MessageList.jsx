import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';
//stateFull


export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: 'one', text: 'Hey!' },
                { name: 'one', text: 'How are you?' }
            ],
        };
    }

    sendMessage = (text) => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'Bob',
                text: text
            }]
        });
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) =>
            <Message
                key={'msg_' + i}
                name={el.name}
                text={el.text}
            />);

        return <div id="convo">
            <ul className="chat-thread">
                {Messages}
            </ul>
            <div className="after-chat">
                <MsgInput sendMsg={this.sendMessage} />
            </div>
        </div>;

    }

    componentDidUpdate() {
        let msgs = [...this.state.messages];

        if (msgs[msgs.length - 1].name != 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, {
                        name: 'Bot',
                        text: 'Ваш вопрос очень важен для Вас!'
                    }]
                });
            }, 1000);
        }
    }
};