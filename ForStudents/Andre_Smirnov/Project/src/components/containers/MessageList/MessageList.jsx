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
            inputMsg: '',
            
        };
    }

    sendMessage = (e) => {        
        this.setState({
            messages: [...this.state.messages, {
                name: 'User1', text: this.state.inputMsg
            }]
        });
        e.preventDefault();        
    }
    handleChangeInputMsg = (e) => {
        this.setState({ inputMsg: e.target.value });
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
            />);
        
        return <div className="message__wrapper">
            <div className="message__items">
                {Messages}
            </div>
            
            <form action="#" onSubmit={this.sendMessage} >
                <input type="text" name="textMessage" id="" placeholder="Введите текст сообщения" value={this.state.inputMsg} onChange={this.handleChangeInputMsg} />
                <input type="submit" value="add" />
               
            </form>
        </div>;

    }
};

