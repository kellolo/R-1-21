
import React, { Component } from 'react';
import Message from '@components/Message';

export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = { messages: [], text: '' };
    }

    handleChange = (e) => {
        if (e.keyCode !== 13) {
            this.setState({ text: e.target.value });
        } else {
            this.handleSubmit(e);   
        }        
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
    }

    componentDidUpdate () {
        let messageScroll = document.querySelector('.message_list');
        messageScroll.scrollTop = messageScroll.scrollHeight;
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((message, i) => 
            <Message 
                key = { i } 
                user = { message.user }
                text = { message.text }
            />);
        
        return <div className = "message_field">
                    <div className = "message_list">
                        { Messages }
                    </div>
                    <form 
                        className = "new_message_form" 
                        onSubmit = { this.handleSubmit }>
                        <textarea
                            className = "new_message_text"
                            onChange = { this.handleChange }
                            onKeyUp = { this.handleChange }
                            value = { this.state.text }
                            placeholder = "Написать сообщение..."
                        ></textarea>
                        <input 
                            className = "new_message_btn" 
                            type = "submit" 
                            value = "Отправить"
                        />
                    </form>
                </div>;                
    }
};
