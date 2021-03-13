import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ContactList from "@containers/ContactList";

const Modal = (props) => {
    const { open, onClose, title, onSelect } = props;

    return (
        <Dialog open={ open } onClose={ onClose }>

            <DialogTitle id="contacts-dialog">{title}</DialogTitle>
            <ContactList onClick={(name, id) => { onSelect(name, id) }} />

        </Dialog>
    )
}

export default Modal;