import React, { Component } from 'react';
import './style.scss';

import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default class ChatList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chatList: ['Chat_0', 'Chat_1', 'Chat_2', 'Chat_3', 'Chat_4']
        };
    }


    render() {
        const { chatList } = this.state;
        const chats = chatList.map((el, i) =>
            <li className='chats__item'>
                <Button
                    key={'chat_' + i}
                    name={el}
                    className='item__btn'
                    variant="contained"
                    color="primary">
                    {el}
                </Button>
            </li>);

        return <div className='chats'>
            <Button
                variant="contained"
                color="primary"
                endIcon={<AddCircleIcon />}>
                Add
            </Button>
            <ul className='chats__list'>
                {chats}
            </ul>
        </div>
    }
}