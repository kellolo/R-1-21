import React, { Component } from 'react';
import './style.scss';

import ContactsList from "@components/ContactsList";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import SelectedListItem from "@components/SelectedListItem";

export default class ChatsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            chatName: [
                {name: 'Admin'},
                {name: 'User1'},
                {name: 'User2'},
                {name: 'User3'},
            ],
        };
    }

    render() {
        const chatName = this.state.chatName.map( (el, i) => {
            return <ListItem button key = { 'userID' + i }>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary={ el.name } />
            </ListItem>
        });

        return <div className="chats-list">
            <List>
                { chatName }
            </List>

            <SelectedListItem />  {/*not works*/}

            <ContactsList />
        </div>;
    }

};