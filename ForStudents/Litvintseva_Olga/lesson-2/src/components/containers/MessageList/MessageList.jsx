import React, { Component } from 'react';

import Message from '@components/Message';

export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = { messages: [], text: '' };
    }

    botAnswer = () => {
        const botAnswer = {
            user: 'Bot',
            text: 'Не пиши мне, я робот!'
        };
        setTimeout(() =>
            this.setState(
                { messages: [ ...this.state.messages, botAnswer] }
            ), 1000);
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newMessage = {
            user: 'User',
            text: this.state.text
        };
        this.setState(state => ({
            messages: state.messages.concat(newMessage),
            text: ''
        }));
        this.botAnswer();
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((message, i) => 
            <Message 
                key={ i } 
                user={ message.user }
                text={ message.text }
            />);
        
        return <div className="message_field">
                    <div className="message_list">
                        { Messages }
                    </div>
                    <form 
                        className="new_message_form" 
                        onSubmit={this.handleSubmit}>
                        <textarea
                            className="new_message_text"
                            onChange={this.handleChange}
                            value={this.state.text}
                            placeholder="Написать сообщение..."
                        ></textarea>
                        <input className="new_message_btn" type="submit" value="Отправить"/>
                    </form>
                </div>;                
    }
};
