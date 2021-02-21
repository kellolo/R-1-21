import React from 'react';
import './style.scss';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    title: {
        textAlign: 'center'
    },
    list: {
        padding: 0,
        listStyle: 'none'
    },
    item: {
        margin: '5px'
    },
}));

const getModalStyle = () => {
    const top = 70;
    const left = 100;

    return {
        top: `${top}%`,
        left: `${left}%`,
    };
}

export default () => {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 className={classes.title}>Text in a modal</h2>
            <ul className={classes.list}>
                <li className={classes.item}>Chat 0</li>
                <li className={classes.item}>Chat 1</li>
                <li className={classes.item}>Chat 2</li>
            </ul>
        </div>
    );

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                endIcon={<AddCircleIcon />}>
                Add
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                className='add-chat-window'>
                {body}
            </Modal>
        </div>
    );
}