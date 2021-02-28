import React, {Component, useEffect, useRef, useState} from "react";

import Message from "@components/Message/";
import IconButton from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

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
    const {chatId} = props;
    const [messages, setMessages] = useState({
        "1": [{author: "Оксана", text: "Привет чату 1!"}],
        "2": [{author: "Оксана", text: "Привет чату 2!"}],
        "3": [{author: "Оксана", text: "Привет чату 3!"}]
    });
    const [text, setText] = useState('');
    const messagesWindow = useRef();
    const classes = useStyles();

    useEffect(() => {
        messagesWindow.current.scrollTop = messagesWindow.current.scrollHeight;
    }, [messages])

    const handleChange = (ev) => {
        if (ev.keyCode !== 13) {
            setText(ev.target.value)
        } else {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        let temp = messages;

        if (temp[chatId]) {
            temp[chatId] = [...temp[chatId], {author: "Оксана", text: text}];
        } else {
            temp[chatId] = [{author: "Оксана", text: text}];
        }

        if (text.length > 0) {
            setMessages(temp);
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

export default MessageList;