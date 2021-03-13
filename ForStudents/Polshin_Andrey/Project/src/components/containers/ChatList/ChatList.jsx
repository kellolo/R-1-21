import React, { Component } from 'react';
import './style.scss';
import { push } from 'connected-react-router';
import Button from '@material-ui/core/Button';
import AddChatWindow from '@containers/AddChatWindow';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat } from '@actions/chats';

const ChatList = (props) => {

    const { chatID, chats, haseNewMsg } = props;
    const Chats = Object.values(chats).map((el, i) => <li key={i} className='chats__item'>
        <Button name={el.title}
            className='item__btn'
            variant="contained"
            disabled={haseNewMsg == -1 && (el.id == chatID || haseNewMsg == el.id)}
            onClick={() => handleNavigate(`/chat/${el.id}`)}
            color="primary">
            {el.title}
        </Button>
    </li >);

    const handleNavigate = link => {
        props.push(link);
    };

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
    chats: chatsReducer.chats,
    haseNewMsg: chatsReducer.newMsg
});
const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);