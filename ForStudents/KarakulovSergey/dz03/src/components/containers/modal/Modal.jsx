import React from 'react';
import ReactDom from 'react-dom';
import ContactList from '@containers/ContactList';
import './style.scss';
import Modal from '@material-ui/core/Modal';


export default function SimpleModal() {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="modal">
      <h2 id="simple-modal-title">Добавить чат</h2>
      <ContactList />
      <button id="btn" type="button" onClick={handleClose}>
        закрыть
      </button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Открыть контакты
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        {body}
      </Modal>
    </div>
  );
}