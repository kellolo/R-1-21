import React, { Component } from 'react';
import Message from '@components/Message';
import './style.scss';
// import MessageInput from '@components/MessageInput';
import ChatsList from '@conteiners/ChatsList';

export default class MessageList extends Component {
    
    
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'Sasha', text: 'Hey'},
                { name: 'Ananas', text: 'How are you?' }
            ],
            text: ''
        };
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }
    };

    sendMessage = () => {
        this.setState({
            text: '',
            messages: [...this.state.messages, {
                name: 'User', 
                text: this.state.text
            }]
        });
    };

    componentDidUpdate() {
        // console.log('изменение');
    };

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text } 
            />);

        return <div className="messageList">
            <div className="message-lt--wrap">
                <ChatsList />
            </div>
            <div className="message-bg--wrap">
                <div className="message">
                    { Messages }
                </div>
                <div className="form-wrap">
                    <input className="input-send" type="text" value={ this.state.text } onChange={ this.handleChange } onKeyUp={ this.handleChange } />
                    <button className="btn-send" onClick={ this.sendMessage }>Send</button>
                </div>
                
            </div>        
        </div>;
    };
};
