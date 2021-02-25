import React from 'react';
import './style.scss';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

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
            type = "text"
            variant="filled"
            onKeyUp={ handleChange }
        />

        <button onClick={ handleChange }>
            <SendIcon />
        </button>
    </div>;
};