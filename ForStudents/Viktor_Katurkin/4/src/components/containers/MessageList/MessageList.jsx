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
            messages: [...this.state.messages, 
            {
                name: 'User',
                text: this.state.text
            }]
        });
    };

    componentDidUpdate() {
        // console.log('Отправлено');
    };

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
            />);
        
        return <div className="message-list__wrapper">
            <div className="message-list__messages">
               { Messages } 
            </div>
            <div className="message-list__form">
                <input 
                    type="text"
                    value = { this.state.text }
                    onChange = { this.handleChange }
                    onKeyUp = { this.handleChange }
                />
                <button onClick={ this.sendMessage }>add</button>
            </div>
        </div>;

    };
};

//stateLess
// const arr = [{ name: 'one', text: 'Hey!' }, { name: 'one', text: 'How are you?' }];

// export default () => {
//     const Messages = arr.map((el, i) => <Message 
//                                             key={ 'msg_' + i } 
//                                             name={ el.name } 
//                                             text={ el.text }
//                                         />);

//     return <div>
//         { Messages }
//     </div>;
// };