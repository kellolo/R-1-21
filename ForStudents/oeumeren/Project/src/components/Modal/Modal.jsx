import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ContactList from "@containers/ContactList";

const Modal = (props) => {
    const { open, onClose, title, onSelect, contacts } = props;

    return (
        <Dialog open={open} onClose={onClose}>

            <DialogTitle id="contacts-dialog">{title}</DialogTitle>
            <ContactList onClick={(value) => { onSelect(value) }} contacts={contacts} />

        </Dialog>
    )
}

export default Modal;