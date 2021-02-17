import React, { Component } from 'react';
import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';


export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'one', text: 'Hey!', styleName: 'msg__user'}, 
                { name: 'two', text: 'How are you?', styleName: 'msg__companion' }
            ],
        };
    }

    sendMessage = (value) => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'one', text: value, styleName: 'msg__user'
            }]
        });
    }

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
                styleName={el.styleName}
            />);
        
        return <div className="msg__container">
           <MsgInput sendMessage={ this.sendMessage }/>
            <div className="msg__container_list">
                { Messages }
            </div>
        </div>;

    }
};
