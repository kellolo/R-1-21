import React from 'react';
import Modal from '@material-ui/core/Modal';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';

import './style.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addChat } from '@actions/chats';
import { dellContact } from '@actions/contacts';

function SimpleModal(props) {
  const { contacts } = props;
  const [open, setOpen] = React.useState(false);
  
  const myContacts = contacts.map((el, i) => {
    return (
      <ListItem button onClick={ () => { handleClose(el.name, el.id) } } key={ `contact-${i}` } className="contact" >
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
      props.addChat(name, id);
      props.dellContact(name);
    }
    setOpen(false)
  };
  
  return (
    <div className="contact-list">
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

const mapStateToProps = ({ chatsReducer, contactsReducer }) => ({
  activeChats: chatsReducer.activeChats,
  contacts: contactsReducer.contacts
});

const mapActions = dispatch => bindActionCreators({ addChat, dellContact }, dispatch);

export default connect(mapStateToProps, mapActions)(SimpleModal);