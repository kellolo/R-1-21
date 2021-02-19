import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Chat from '@components/Chat';
//stateFull


export default class ChatList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            chats: [
                { userName: 'user_1', lastMessage: {name: 'user_2', text: 'Hey!'} }, 
                {  userName: 'user_2', lastMessage: {name: 'user_2', text: 'How are you?' }}
            ],
        };
    }

    addChat = () => {
        
        this.setState({
            chats: [...this.state.chats]
        });
    }

    render() {
        const { chats } = this.state;
        const Chats = chats.map((el, i) => 
            <Chat 
                key={ 'msg_' + i } 
                userName={el.userName}                 
                lastMessage={ el.lastMessage }
            />);
        
        return <div className="chat__wrapper">
            <h1>ReactZilla</h1>
            {/* <button onClick={ this.addChat }>add</button> */}
            { Chats }
        </div>;

    }
};

