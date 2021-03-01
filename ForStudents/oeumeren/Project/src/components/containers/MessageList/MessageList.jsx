import React, { useEffect, useRef, useState} from "react";

import Message from "@components/Message/";
import IconButton from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

import { connect } from "react-redux";
import { sendMsg } from "@actions/messageAction.js";

import {makeStyles} from '@material-ui/core/styles';
import styles from "./styles.module.scss";

const useStyles = makeStyles((theme) => ({
    button: {
        width: "44px",
        height: "44px",
        minWidth: "44px",
        marginLeft: "10px"
    }
}));

const MessageList = (props) => {
    const {chatId, messages, sendMsg} = props;
    const [text, setText] = useState('');
    const messagesWindow = useRef();
    const classes = useStyles();

    useEffect(() => {
        messagesWindow.current.scrollTop = messagesWindow.current.scrollHeight;
    }, [chatId, messages]);

    const handleChange = (ev) => {
        if (ev.keyCode !== 13) {
            setText(ev.target.value)
        } else {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        if (text.length > 0) {
            sendMsg(chatId, "Оксана", text);
            setText('');
        }
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.message__list}
                 ref={messagesWindow}
            >
                {messages[chatId] ? messages[chatId].map((message, i) => (
                    <Message message={message} key={i}/>
                )) : <p style={{ margin: "0" }}>Начните диалог</p>}
            </div>

            <div className={styles.form__wrapper}>

                <TextField id="text" label=""
                           variant="outlined"
                           className={styles.input}
                           value={text}
                           onChange={(ev) => handleChange(ev)}
                           onKeyUp={(ev) => handleChange(ev)}
                />

                <IconButton variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={() => handleSubmit()}>
                    <SendIcon>send</SendIcon>
                </IconButton>

            </div>

        </div>
    )
}

const mapStateToProps = (store) => ({
    messages: store.messagesReducer.messages
});

const mapDispatchToProps = (dispatch) => ({
    sendMsg: (chatId, author, text) => dispatch(sendMsg(chatId, author, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);