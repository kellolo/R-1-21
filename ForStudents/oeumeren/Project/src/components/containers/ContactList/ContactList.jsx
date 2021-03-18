import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {connect} from "react-redux";

const ContactList = (props) => {
    const { onClick, contacts } = props;

    const handleListItemClick = (name, id) => {
        onClick(name, id);
    };

    const renderContacts = () => (
        contacts.map((contact) => (
            <ListItem button onClick={() => handleListItemClick(contact.name, contact.id)} key={contact.id}>

                <ListItemAvatar>

                    <Avatar>
                        <PersonIcon />
                    </Avatar>

                </ListItemAvatar>

                <ListItemText primary={contact.name} />
            </ListItem>
        ))
    );

    return (
        <List>{ renderContacts() }</List>
    )
}

const mapStateToProps = ({ contactsReducer }) => ({
    contacts: contactsReducer.contacts
});

export default connect(mapStateToProps, {})(ContactList);