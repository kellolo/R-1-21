import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './style.scss';
import Modal from '@components/Modal';


export default class DialogList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [
                { userID: 1, name: 'bot', avatar: null, isActive: false},
                { userID: 2, name: 'Макс', avatar: null, isActive: true},
                { userID: 7, name: 'Admin', avatar: null, isActive: false},
            ],
        };
    }

    render() {
        const { users } = this.state;
        const Users = users.map(user => (
            <div className={ user.isActive ? 'active' : '' } key={user.userID}>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar alt={ user.name } src={ user.avatar } />
                    </ListItemAvatar>
                    <ListItemText primary={ user.name } />
                </ListItem>
            </div>
        ));
        return (
            <Grid container direction="column">
                <Grid item>
                    <Modal />
                </Grid>
                <Grid item>
                    <List>{ Users }</List>
                </Grid>
            </Grid>);
    }
};
