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
        };
    }

    sendMessage = () => {
        // this.state.messages.push({ name: 'bot', text: 'fine' }) not working
        // const old = [...this.state.messages];
        // old.push({ name: 'bot', text: 'fine' });
        // this.setState(
        //     {
        //         messages: old
        //     }
        // );
        this.setState({
            messages: [...this.state.messages, {
                name: 'bot', text: 'fine'
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
            />);
        
        return <div>
            <button onClick={ this.sendMessage }>add</button>
            { Messages }
        </div>;

    }
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