import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

import './style.scss'

export default function SimpleModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const contactslist = [
    { name: "Ivan", lastName: "Petrov" },
    { name: "John", lastName: "Smith" }];

  const body = (
    <div className="modal-body">
      <h2 id="simple-modal-title">Contacts List</h2>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={contactslist[0].lastName} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={contactslist[1].lastName} />
      </ListItem>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Добавить чат
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
