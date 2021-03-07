
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';

const contacts = [
  { name: 'Вася Иванов', id: '1'},
  { name: 'Юля Петрова', id: '2'},
  { name: 'Петя Сидоров', id: '3'},
  { name: 'Игорь Пупкин', id: '4'},
  { name: 'Сергей Сергеев', id: '5'},
  { name: 'Марья Моревна', id: '6'},
  { name: 'Оля Попова', id: '7' },
  { name: 'Женя Смирнов', id: '8' },
  { name: 'Таня Морозова', id: '9' },
  { name: 'Ваня Кукушкин', id: '10' }
];

function SimpleDialog(props) {

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    props.addChat(value);
    onClose(value);
  };

  return (
    <Dialog onClose={ handleClose } aria-labelledby="simple-dialog-title" open={ open }>
      <List className="modal">
        {contacts.map((contact, index) => (
          <ListItem button onClick={ () => handleListItemClick(contact) } key={ index }>
            <ListItemAvatar>
              <Avatar className="chat_avatar">
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={ contact.name }/>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.object.isRequired,
};

export default function SimpleDialogDemo(props) {
  
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(contacts[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className = "add_contact_wrp">
      <button 
        className = "add_contact_btn"
        type = "button" 
        onClick={ handleClickOpen }>
          Контакты
      </button>
      <SimpleDialog selectedValue={ selectedValue } open={ open } onClose={ handleClose } addChat={ props.add }/>
    </div>
  );
}
