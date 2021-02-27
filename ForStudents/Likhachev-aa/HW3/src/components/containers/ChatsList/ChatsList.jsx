import React, { Component } from 'react';
import './style.scss';

import ContactsList from "@components/ContactsList";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SelectedListItem from "@components/SelectedListItem";

export default class ChatsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatName: [
                { name: 'Andrew' },
                { name: 'Bart' },
                { name: 'Tom' },
                { name: 'John' },
            ],
        };
    }

    render() {
        const chatName = this.state.chatName.map((el, i) => {
            return <ListItem button key={'userID' + i}>
                <ListItemIcon>
                    < ArrowForwardIcon />

                </ListItemIcon>
                <ListItemText primary={el.name} />
            </ListItem>
        });

        return <div className="chats-list">
            <List>
                {chatName}
            </List>

            <SelectedListItem />
            { }
            <ContactsList />
        </div>;
    }

};