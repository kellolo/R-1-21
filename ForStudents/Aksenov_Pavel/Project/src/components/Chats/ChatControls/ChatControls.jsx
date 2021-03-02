import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import './style.scss';

const useStyles = makeStyles(() => ({
  grid: {
    padding: '10px'
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
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
  lists: {
    minWidth: '400px',
    borderBottom: '1px solid #dfe7f4'
  },
  lists_title: {
    backgroundColor: '#6c7687',
    color: '#d0e0ee'
  },
  chat: {
    backgroundColor: '#6c7687'
  },
  fillchat: {
    fill: '#FFF'
  },
  fill: {
    fill: '#6c7687'
  },
  gridBtn: {
    padding: '15px'
  },
  button: {
    fontSize: '12px',
    fontWeight: 600
  }
}));

// >>
const SimpleDialogChat = ({ onClose, contacts, open, newChat, selected, selectedUser }) => {
  const classes = useStyles();
  // const { onClose, contacts, open, newChat, selected, selectedUser } = props;
  
  const handleCloseDialog = () => {
    onClose();
    selected();
  };

  const handleListItemClick = (value, id) => {
    selected(id);
  };

  const handleAddContact = () => {
    newChat(selectedUser);
    handleCloseDialog();
  }
  
  return (
    <Dialog onClose = { handleCloseDialog } aria-labelledby = "simple-dialog-title" open = { open }>
      <DialogTitle className = { classes.lists_title }>Контакты</DialogTitle>
      <List>
        { contacts.map(val => (
          <ListItem
            key = { val.id }
            alignItems = "flex-start"
            button
            selected = { selectedUser === `${val.id}` }
            onClick = { value => handleListItemClick(value, `${val.id}`) }
            className = { classes.lists }
          >
            <ListItemAvatar>
              <Avatar alt = { val.name } src = { val.icon } />
            </ListItemAvatar>
            <ListItemText className = { classes.fontPrimary }
              primary={
                <Typography className = { classes.fontPrimary }>
                  { val.name }
                </Typography>
              }
              secondary={
                <Typography className = { classes.fontSecondary }>
                  { val.telephone }
                </Typography>
              }
            />
          </ListItem>
        ))}
        </List>
        <Grid justify="space-between" container spacing={2} className={ classes.gridBtn }>
          <Button onClick = { handleAddContact } color="primary" className={ classes.button }>Добавить контакт</Button>
          <Button className={ classes.button } onClick={ handleCloseDialog } >Закрыть</Button>
        </Grid>
    </Dialog>
  );
}
// <<

export default ({ contacts, addChat }) => {
  const classes = useStyles();
  const [openChat, setOpenChat] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  const openModalAddChat = () => {
    setOpenChat(true);
  };

  const closeModalAddChat = () => {
    setOpenChat(false);
  };

  const selected = (id) => {
    setSelectedUser(id);
  }

  return <div>
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
      contacts = { contacts } 
      selectedUser = { selectedUser } 
      selected = { selected } 
      open = { openChat } 
      onClose = { closeModalAddChat } 
      newChat = { addChat } 
    />
  </div>
};
