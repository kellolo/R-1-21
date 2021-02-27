import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './style.scss';
import ContactsModal from '@components/ContactsModal';


export default class DialogList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [
                { userID: '1', name: 'bot', avatar: null },
                { userID: '2', name: 'Макс', avatar: null },
                { userID: '7', name: 'Admin', avatar: null },
            ],
            contacts: [
                {userID: '3', name: 'Иваныч', avatar: null},
                {userID: '4', name: 'Серега', avatar: null},
                {userID: '5', name: 'Андрюха Череп', avatar: null},
                {userID: '6', name: 'ДашкаРеактер', avatar: null},
            ]
        };
    }

    /**
     * Update users and contacts
     * @param {number} userID
     */
    addChat = (userID) => {
        // FIXME: Чет я тут понафигачил
        this.setState({users: [...this.state.users, ...this.state.contacts.filter(user => {
            return user.userID === userID
        })]});
        this.setState({contacts: [...this.state.contacts.filter(user => {
            return user.userID !== userID
        })]});
    }

    getCSSClass = (userID) => {
        const active = userID === this.props.userID ? ' active' : '';
        return `user${active}`;
    }

    render() {
        const { users } = this.state;
        const Users = users.map(user => (
            <div className={this.getCSSClass(user.userID)} key={user.userID}>
                <Link to = {`/chat/${user.userID}`} >
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar alt={ user.name } src={ user.avatar } />
                        </ListItemAvatar>
                        <ListItemText primary={ user.name } />
                    </ListItem>
                </Link>
            </div>
        ));
        return (
            <Grid container direction="column">
                <Grid item>
                    <ContactsModal contacts={ this.state.contacts } addChat={ this.addChat } />
                </Grid>
                <Grid item>
                    <List>{ Users }</List>
                </Grid>
            </Grid>);
    }
};
