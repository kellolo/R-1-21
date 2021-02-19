
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './style.scss';

import ContactsList from '@containers/ContactsList';

export default class Chatslist extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return <div className="chatslist">
            {/* <List component="nav" aria-label="secondary mailbox folders"> */}
            <ListItem button>
                <ListItemText primary="User1" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="User2" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="User13" />
            </ListItem>
            {/* </List> */}
            <ContactsList />
        </div>;
    }
};
