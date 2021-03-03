import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddChatWindow from '@containers/AddChatWindow';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat } from '@actions/chats';

const ChatList = (props) => {

    const { chatID, chats } = props;
    const Chats = Object.values(chats).map((el, i) => <li key={i} className='chats__item'>
        <Button name={el.title}
            className='item__btn'
            variant="contained"
            disabled={el.id == chatID}
            color="primary">
            <Link to={`/chat/${el.id}`} className='item__link'>
                {el.title}
            </Link>
        </Button>
    </li>);

    const handlerAddChat = name => {
        if (!name) return;
        const { addChat } = props;
        addChat(name);
    }

    return (
        <div className="chats">
            <ul className="chats__list">
                {Chats}
            </ul>
            <AddChatWindow addChat={handlerAddChat} />
        </div>
    );
}

const mapStateToProps = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});
const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);