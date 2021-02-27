import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';


import './style.scss';

export default class MsgInput extends Component {
    constructor (props) {
        super(props);
    }

    sendMessage = (event) => {
        if(event.type === 'keyup' && event.key !== 'Enter') {
            return;
        } 
        const userMsgInput = document.querySelector('#user-msg');
        const msg = userMsgInput.value.trim();
        if (msg === '') return;
        this.props.sendMessage(msg);
        userMsgInput.value = '';
    }

    render() {
        return (<Grid container>
            <Grid item xs={10}>
                <TextField fullWidth onKeyUp={ this.sendMessage } id="user-msg" label="Послание..." />
            </Grid>
            <Grid item xs={2}>
                <IconButton aria-label="delete" onClick={ this.sendMessage }>
                    <SendIcon />
                </IconButton>
            </Grid>
        </Grid>);
    }
};
