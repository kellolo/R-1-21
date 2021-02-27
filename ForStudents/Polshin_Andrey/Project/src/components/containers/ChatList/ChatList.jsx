import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddChatWindow from '@containers/AddChatWindow';

export default (props) => {

    const handlerAddChat = name => {
        if (!name) return;
        props.addChat(name);
    }

    const { chats, curent, addChat } = props;
    const Chats = Object.values(chats).map((el, i) => <li key={i} className='chats__item'>
        <Button name={el.title}
            className='item__btn'
            variant="contained"
            disabled={el.id === curent}
            color="primary">
            <Link to={`/chat/${el.id}`} className='item__link'>
                {el.title}
            </Link>
        </Button>
    </li>);

    return (
        <div className="chats">
            <ul className="chats__list">
                {Chats}
            </ul>
            <AddChatWindow addChat={handlerAddChat} />
        </div>
    )
}
