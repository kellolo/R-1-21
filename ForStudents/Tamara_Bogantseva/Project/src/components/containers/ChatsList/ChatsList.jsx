import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

import ContactsList from '@containers/ContactsList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const avatarsPath = '../../src/resources/img/avatars/';

export default class ChatsList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return <div className="chatsList">
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Darth Vader" src={`${avatarsPath}darth_vader.jpeg`}>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Darth Vader" secondary="I am your father" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Chewbacca" src={`${avatarsPath}chewbacca.jpg`}>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Chewbacca" secondary="Arrrrw" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Luke" src={`${avatarsPath}luke.jpg`}>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Luke Skywalker" secondary="I'm Here To Rescue You." />
                </ListItem>
            </List>
            <ContactsList />
        </div >;
    }
}