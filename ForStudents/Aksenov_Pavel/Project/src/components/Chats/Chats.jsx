import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

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
    // console.log(event);
    setSelectedIndex(index);
  };

  const ListConcats = ({chats}) => {
    return chats.map(val => {
      return (
        <Link key = { val.id } to={`/chat/${val.id}/`}>
          <ListItem
            key = { val.id }
            alignItems = "flex-start"
            button
            selected = { selectedIndex === `${val.id}` }
            onClick = { event => handleListItemClick(event, `${val.id}`) }
          >
            <ListItemAvatar>
              <Avatar alt = { val.name } src={ val.icon } />
            </ListItemAvatar>
            <ListItemText className = { classes.fontPrimary }
              primary={
                <Typography className = { classes.fontPrimary }>
                  {val.name}
                </Typography>
              }
              secondary={
                <Typography className = { classes.fontSecondary }>
                  { val.lastMessageShort }
                </Typography>
              }
            />
          </ListItem>
        </Link>
      )
    })
  };

  return <div className="chat-wrap_display__contacts-list">
    <div className={ classes.root }>
      <List component="nav" aria-label="main mailbox folders" style={{ paddingTop: 0 }}>
        <ListConcats chats={ props.chats }/>
      </List>
    </div>
  </div>
};
