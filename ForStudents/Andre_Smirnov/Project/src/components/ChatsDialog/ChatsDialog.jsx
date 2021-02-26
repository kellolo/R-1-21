import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const users = ['user_5', 'user_6', 'user_7'];
//documentation https://material-ui.com/ru/styles/api/#makestyles-styles-options-hook
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  testClass: {
    fontSize: '10em'
  },
  chatDialog: {

    'aria-labelledby': "simple-dialog-title",

  }
});

function SimpleDialog(props) {

  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('xs');
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    props.addChat(value);
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className={classes.chatDialog}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle id="simple-dialog-title">add Chat</DialogTitle>
      <List>
        {users.map((user) => (
          <ListItem button onClick={() => handleListItemClick(user)} key={user}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user} />
          </ListItem>
        ))}


      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ChatsDialog(props) {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(users[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        <AddIcon />
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} addChat={props.add} />
    </div>
  );
}