import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './style.scss';

const useStyles = makeStyles((theme) => ({
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
}));


export default (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState();
  
  const handleListItemClick = (event, index) => {
    console.log(event);
    setSelectedIndex(index);
  };

  const chats = [
    {
      id: 1,
      name: "Максим",
      lastMessageShort: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laboriosam iusto molestiae?',
      icon: '',
    },
    {
      id: 2,
      name: "Толя",
      lastMessageShort: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laboriosam iusto molestiae?',
      icon: '',
    },
    {
      id: 3,
      name: "Вика",
      lastMessageShort: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laboriosam iusto molestiae?',
      icon: '',
    },
    {
      id: 4,
      name: "Илья",
      lastMessageShort: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores laboriosam iusto molestiae?',
      icon: '',
    }
  ];

  const ListConcats = (props) => {return props.chats.map((val) => {
    return <ListItem
      key={val.id}
      alignItems="flex-start"
      button
      selected={selectedIndex === `${val.id}`}
      onClick={(event) => handleListItemClick(event, `${val.id}`)}
    >
      <ListItemAvatar>
        <Avatar alt={val.name} src={val.icon} />
      </ListItemAvatar>
      <ListItemText className={classes.fontPrimary}
        primary={
          <Typography className={classes.fontPrimary}>
            {val.name}
          </Typography>
        }
        secondary={
          <Typography className={classes.fontSecondary}>
            {val.lastMessageShort}
          </Typography>
        }
      />
    </ListItem>  
  })};

  return <div className="chat-wrap_display__contacts-list">
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders" style={{paddingTop: 0}}>
        <ListConcats chats={ chats }/>
      </List>
    </div>
  </div>
};
