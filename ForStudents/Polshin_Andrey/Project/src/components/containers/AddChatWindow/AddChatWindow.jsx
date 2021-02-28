import React from 'react';
import './style.scss';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

function AddChat(props) {

    const emails = ['username@gmail.com', 'user02@gmail.com', 'test@lol.net'];
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Add contacts</DialogTitle>
            <List>
                {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                            <Avatar>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

export default (props) => {
    const [open, setOpen] = React.useState(false);
    const { addChat } = props;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        addChat(value);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}>
                Add
            </Button>
            <AddChat open={open} onClose={handleClose} />
        </div>
    );
}