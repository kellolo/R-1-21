import React, { Component } from 'react';

import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';
import List from '@material-ui/core/List';

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
        const Messages = this.state.messages.map((el, i) =>
            <Message
                msgID={ 'msg_' + i }
                name={ el.name } 
                text={ el.text }
                styleMsg={ el.style }
            />
        );
        
        return <div className="message-list">
            <List className="message-list__msg">
                { Messages }
            </List>
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
