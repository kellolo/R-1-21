import './style.scss';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ChatsDialog from '@components/ChatsDialog';

export default class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChats: [
                { name: 'Вася', id: '1' },
                { name: 'Клава', id: '2' },
                { name: 'Дуня', id: '3' },
                { name: 'Пердуня', id: '4' }
            ]
        }
    }

    addChat = name => {
        this.setState({ activeChats: [...this.state.activeChats, { name, id: Date.now() }] });
    }

    render() {
        const { activeChats } = this.state;
        const Chats = activeChats.map((el, i) => <li key={i} className="chatlist-list__item">
            <Link to={`/chat/${el.id}`} >{el.name}</Link>
        </li>);

        return (
            <div className="chatlist">
                <ul className="chatlist-list">
                    {Chats}
                </ul>
                <ChatsDialog add={this.addChat} />
            </div>
        )
    }
}
