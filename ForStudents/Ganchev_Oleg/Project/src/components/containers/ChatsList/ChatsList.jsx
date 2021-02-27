import React, { Component } from 'react';
import './style.scss';
import ContactsList from "@containers/ContactsList";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import { Link } from "react-router-dom";

export default class ChatsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            chatName: [
                { id: '1000', name: 'Admin', avatar: null },
                { id: '1001', name: 'User1', avatar: null },
                { id: '1002', name: 'User2', avatar: null },
            ],
            selectedIndex: 0,
        };
    }

    addChat = (id, name, avatar) => {
        const check = this.state.chatName.filter( (el) => el.id === id);
        if (check.length === 0) {
            this.setState({
                chatName: [...this.state.chatName, { id, name, avatar }]
            });
        }
    }

    getSelectedIndex(index) {
        return this.state.selectedIndex === index;
    }

    setSelectedIndex(index) {
        this.setState({
            selectedIndex: index,
        });
    }

    render() {
        const chatsList = (
            <List>
                { this.state.chatName.map( (el, i) =>
                    <Link to={`/chat/${el.id}`}
                          key={ 'userID' + i }
                          className="chats-list__link"
                    >
                        <ListItem
                            button
                            selected={ this.getSelectedIndex(i) }
                            onClick={ () => this.setSelectedIndex(i) } >
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary={ el.name } />
                        </ListItem>
                    </Link>
                ) }
            </List>
        );

        return <div className="chats-list">
            { chatsList }
            <ContactsList add={ this.addChat } />
        </div>;
    }

};