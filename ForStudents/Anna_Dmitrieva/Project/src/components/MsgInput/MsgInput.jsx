import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import './style.scss';

const useStyles = makeStyles(() => ({
    btn_input: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: '100%',
    },
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
}));

export default (props) => {
    const classes = useStyles();
    return (
        <div className="msg_input">
            <TextField className="text_input"
                autoFocus
                type="text"
                // ref={ props.focus }
                value= { props.clearInput }
                onChange={ props.change }
                onKeyUp={ props.keyup }
                id="outlined-basic"
                label="Напишите сообщение"
                variant="outlined"
            />
            <Button 
                className={ classes.btn_input }
                variant="outlined" 
                color="primary" 
                onClick={ props.click }>
                Отправить
            </Button>
        </div>
    );
};