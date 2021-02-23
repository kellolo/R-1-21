import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import ChatList from "@components/ChatList";
import Modal from '@material-ui/core/Modal';

import "./style.scss";

export default function SimpleModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        // <div style={modalStyle} className={classes.paper}>
        <div className="modal-main">
            <ChatList />
        </div>
    );
    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Контакты
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
};