import React, { Component } from 'react';
import Message from '@components/Message';
import './style.scss';

export default class MessageList extends Component {
    
    
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'Sasha', text: 'Hey'},
                { name: 'Ananas', text: 'How are you?' }
            ],
        };
    }


    sendMessage = () => {
        const aria = document.querySelector('textarea').value;
        this.setState({
            messages: [...this.state.messages, {
                name: 'bot', text: aria
            }]
        });
        document.querySelector('textarea').value = '';
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text } 
            />)

        return <div>
            <div>
                <textarea></textarea>
            </div>
            <button onClick={ this.sendMessage }>Add</button>
            { Messages }
        </div>;
    }
};
