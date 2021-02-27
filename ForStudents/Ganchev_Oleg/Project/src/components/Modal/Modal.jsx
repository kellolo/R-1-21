import React from 'react';
import './style.scss';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function SimpleModal(prors) {
    const { userName, addChat } = prors;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (el) => {
        addChat(el.id, el.name, el.avatar);
        handleClose();
    }

    const userNameList = (
        <List>
            { userName.map( (el,i) =>
            <ListItem
                button
                key={ el.id }
                onClick={ () => handleListItemClick(el) }
            >
                <ListItemAvatar>
                    <Avatar alt={ el.name} src={ el.avatar } />
                </ListItemAvatar>
                <ListItemText primary={ el.name } />
            </ListItem>
            ) }
        </List>
    );

    return (
        <div className="modal__wrap">
            <button type="button" onClick={ handleOpen }>
                Contact List
            </button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="modal">
                    <h2>Contact List</h2>
                    <div>
                        { userNameList }
                    </div>
                </div>
            </Modal>
        </div>
    );
}