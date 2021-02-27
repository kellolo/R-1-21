import React from 'react';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import './style.scss';


export default function SimpleModal(props) {
    const [open, setOpen] = React.useState(false);
    const contacts = props.contacts;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUser = (userID) => {
        props.addChat(userID);
        handleClose();
    }

    const Сontacts = contacts.map(user => (
        <div key={ user.userID }>
            <ListItem button onClick={ () => handleUser(user.userID) }>
                <ListItemAvatar>
                    <Avatar alt={ user.name } src={ user.avatar } />
                </ListItemAvatar>
                <ListItemText primary={ user.name } />
            </ListItem>
        </div>
    ));

    const body = (<div className="modal">
            <h2 id="simple-modal-title">Список контактов:</h2>
            <p id="simple-modal-description">
                <List>{ Сontacts }</List>
            </p>
        </div>
    );

  return (
    <div>
       <Button
            fullWidth
            variant="contained"
            color="default"
            startIcon={<Avatar />}
            onClick={ handleOpen }
        >
            Контакты
        </Button>
        <Modal
            open={ open }
            onClose={ handleClose }
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            { body }
        </Modal>
    </div>
  );
};
    