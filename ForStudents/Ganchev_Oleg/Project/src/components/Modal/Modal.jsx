import React from 'react';
import './style.scss';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function SimpleModal(prors) {
    const userName = prors.userName;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const userNameList = userName.map( (el,i) => {
        return <ListItem button key={ 'contactID' + i }>
            <ListItemAvatar>
                <Avatar alt={ el.name} src={ el.avatar } />
            </ListItemAvatar>
            <ListItemText primary={ el.name } />
        </ListItem>
    });

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Contact List
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal">
                    <h2 id="simple-modal-title">Contact List</h2>
                    <div id="simple-modal-description">
                        <List>
                            {userNameList}
                        </List>
                    </div>
                </div>
            </Modal>
        </div>
    );
}