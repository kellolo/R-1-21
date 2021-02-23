import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddChatWindow from '@containers/AddChatWindow';

export default class ChatList extends React.Component {

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
        const Chats = activeChats.map((el, i) => <li key={i} className='chats__item'>
            <Button name={el}
                className='item__btn'
                variant="contained"
                color="primary">
                <Link to={`/chat/${el.id}`} className='item__link'>
                    {el.name}
                </Link>
            </Button>
        </li>);

        return (
            <div className="chats">
                <ul className="chats__list">
                    {Chats}
                </ul>
                <AddChatWindow add={this.addChat} />
            </div>
        )
    }
}
