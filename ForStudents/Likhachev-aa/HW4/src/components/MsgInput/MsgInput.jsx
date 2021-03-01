import React from 'react';
import './style.scss';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

export default (props) => {
    const { sendMessage } = props;

    let inputTarget = '';
    let inputText = '';

    const handleChange = evt => {
        if (evt.keyCode !== 13 && evt.type === 'keyup') {
            inputTarget = evt.target;
            inputText = inputTarget.value;
            return;
        }
        if (inputText === '') return;
        sendMessage(inputText);
        inputTarget.value = '';
    };

    return <div className="msg-input">
        <TextField
            type="text"
            variant="filled"
            onKeyUp={handleChange}

        />
        <IconButton onClick={handleChange} aria-label="send">
            <ChatBubbleOutlineIcon />
        </IconButton>
    </div>;
};