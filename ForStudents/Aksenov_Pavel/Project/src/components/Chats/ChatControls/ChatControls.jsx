import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
import ChatIcon from '@material-ui/icons/Chat';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import './style.scss';

import { addContactToChat } from '@store/chats/actions';

const useStyles = makeStyles(() => ({
  grid: { padding: '10px' },
  avatar: { backgroundColor: blue[100], color: blue[600] },
  fontPrimary: {
    fontSize: "13px",
    fontWeight: 600,
    color:'#5e6dc0'
  },
  fontSecondary: {
    fontSize: "11px",
    display: 'inline',
    color: '#959d9f'
  },
  button_container: { 
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px',
    // backgroundColor: '#ebedf0'
  },
  list: { overflowX: 'hidden', overflowY:'auto', maxHeight: '80%',minWidth: '400px' },
  listItem: { borderBottom: '1px solid #dfe7f4' },
  lists_title: { backgroundColor: '#6c7687', color: '#d0e0ee' },
  chat: { backgroundColor: '#6c7687' },
  fillchat: { fill: '#FFF' },
  fill: { fill: '#6c7687' },
  button: { fontSize: '12px', fontWeight: 600 }
}));

// >>
const SimpleDialogChat = ({ onClose, contacts, open, selectFunction, selectedUser, addContactFunction }) => {
  const classes = useStyles();

  let isdisabled = true;
  if (typeof selectedUser != 'undefined') {
    isdisabled = false;
  }
  else {
    isdisabled = true;
  };

  const handleCloseDialog = () => {
    onClose();
    selectFunction();
  };

  const handleListItemClick = (value, id) => {
    selectFunction(id);
  };

  const handleAddContact = () => {
    addContactFunction(selectedUser);
    handleCloseDialog();
  };
  
  return (
    <Dialog onClose={ handleCloseDialog } aria-labelledby="simple-dialog-title" open={ open }>
      <DialogTitle className={ classes.lists_title }>Контакты</DialogTitle>
      <List className={ classes.list }>
      {/* <List> */}
        { contacts.map(val => (
          <ListItem
            key={ val.id }
            alignItems="flex-start"
            button
            selected={ selectedUser === `${val.id}` }
            onClick={ value => handleListItemClick(value, `${val.id}`) }
            className={ classes.listItem }
          >
            <ListItemAvatar>
              <Avatar alt={ val.name } src={ val.icon } />
            </ListItemAvatar>
            <ListItemText className={ classes.fontPrimary }
              primary={
                <Typography className={ classes.fontPrimary }>
                  { val.name }
                </Typography>
              }
              secondary={
                <Typography className={ classes.fontSecondary }>
                  { val.telephone }
                </Typography>
              }
            />
          </ListItem>
        ))}
        </List>
        <div className={ classes.button_container }>
          <Button disabled={ isdisabled } className={ classes.button } onClick={ handleAddContact } color="primary" >Добавить контакт</Button>
          <Button className={ classes.button } onClick={ handleCloseDialog } color="primary" >Закрыть</Button>
        </div>
    </Dialog>
  );
};
// <<

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const contacts = useSelector(state => state.chatContainer.contacts);

  const [openChat, setOpenChat] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  const openModalAddChat = () => {
    setOpenChat(true);
  };

  const closeModalAddChat = () => {
    setOpenChat(false);
  };

  const selectFunction = (id) => {
    setSelectedUser(id);
  };

  const addContactFunction = (id) => {
    dispatch(addContactToChat(id));
  };

  return (
    <div>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={2} className={ classes.grid }>
            <Grid key='message' item>
              <Fab size="small" className={ classes.chat } aria-label="chatCreate" onClick={ openModalAddChat }>
                <ChatIcon className={ classes.fillchat }/>
              </Fab>
            </Grid>
            <Grid key='group' item>
              <Fab size="small" color="default" aria-label="groupAdd" >
                <GroupAddIcon className={ classes.fill }/>
              </Fab>
            </Grid>
            <Grid key='setting' item>
              <Fab size="small" color="default" variant="round" aria-label="setting" style={{ backgroundColor:'inherit' }}>
                <MoreVertIcon className={ classes.fill }/>
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <SimpleDialogChat 
        contacts={ contacts } 
        selectedUser={ selectedUser } 
        selectFunction={ selectFunction } 
        open={ openChat } 
        onClose={ closeModalAddChat }
        addContactFunction={ addContactFunction }
      />
    </div>
  )
};
