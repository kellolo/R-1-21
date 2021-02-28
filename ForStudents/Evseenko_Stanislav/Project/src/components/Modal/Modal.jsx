import React from 'react';
import Modal from '@material-ui/core/Modal';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';

import './style.scss';

export default function SimpleModal(props) {
  const { contacts, addChat, dellContact } = props;
  const [open, setOpen] = React.useState(false);
  const myContacts = contacts.map((el, i) => {
    return (
      <ListItem button onClick={ () => { handleClose(el.name, el.id) } } key={ 'contact-' + i } className="contact" >
        <Avatar />
        <Typography variant="body1" className="contact__name" >
          { el.name }
        </Typography>
      </ListItem>
    );
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (name, id) => {
    if(typeof name == 'string') {
      addChat(name, id);
      dellContact(name);
    }
    setOpen(false)
  };
  
  return (
    <div>
      <ButtonBase className="modal__button" onClick={ handleOpen } >
        <AddIcon />
        <Typography variant="button">
          Новый чат
        </Typography>
      </ButtonBase>
      <Modal className="modal" open={ open } onClose={ handleClose } >
        <div className="modal__body">
          <Typography variant="h5" className="modal__heading">
            Контакты
          </Typography>
          { myContacts }
        </div>
      </Modal>
    </div>
  );
};