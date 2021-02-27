import React from 'react';
import Modal from '@material-ui/core/Modal';
import Contact from '@components/Contact';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

import './style.scss';

export default function SimpleModal(props) {
  const { contacts } = props;
  const myContacts = contacts.map((el, i) => {
    return (
      <Contact
        name = { el.name }
        key = { 'contact-' + i }
      />
    );
  });
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div>
      <Typography
        variant="h5"
        className="modal__heading">
        Контакты
      </Typography>
      { myContacts }
    </div>
  );

  return (
    <div>
      <ButtonBase
        className="modal__button"
        type="button"
        onClick = { handleOpen }
      >
        <AddIcon />
        <Typography variant="button">
          Новый чат
        </Typography>
      </ButtonBase>
      <Modal
        className="modal"
        open = { open }
        onClose = { handleClose }
      >
        { body } 
      </Modal>
    </div>
  );
};