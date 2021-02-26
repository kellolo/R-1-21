import React from 'react';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import './style.scss';

const contacts = [
    {'userID': 3, 'name': 'Иваныч', 'avatar': null},
    {'userID': 4, 'name': 'Серега', 'avatar': null},
    {'userID': 5, 'name': 'Андрюха Череп', 'avatar': null},
    {'userID': 6, 'name': 'ДашкаРеактер', 'avatar': null},
]

export default function SimpleModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUser = (event) => {
        console.log(event.target);
    }

    const Сontacts = contacts.map(user => (
        <div key={ user.userID }>
            <ListItem button onClick={ handleUser } dataset-userid={ user.userID }>
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
    