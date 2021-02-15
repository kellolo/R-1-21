import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
//stateFull


export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'one', text: 'Hey!' }, 
                { name: 'one', text: 'How are you?' }
            ],
            botAnswer: true,
        };
    }

    sendMessage = () => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'one', text: 'message'
            }],
            botAnswer: true,
        });
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
            />);
        
        return <div>
            <button onClick={ this.sendMessage }>add</button>
            { Messages }
        </div>;
    }

    componentDidUpdate() {
        let botState = this.state.botAnswer;
        console.log(botState);
        if (botState) {
            setTimeout(() =>
                this.setState({
                    messages: [...this.state.messages, { name: 'bot', text: 'bot answer' }],
                    botAnswer: false,
                }),
            1000);
        }
    }
};
