import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

const ContactList = (props) => {
    const { onClick, contacts } = props;

    const handleListItemClick = (value, i) => {
        onClick(value);
    };

    return (
        <List>

            {contacts.map((name) => (
                <ListItem button onClick={() => handleListItemClick(name)} key={name}>

                    <ListItemAvatar>

                        <Avatar>
                            <PersonIcon />
                        </Avatar>

                    </ListItemAvatar>

                    <ListItemText primary={name} />
                </ListItem>
            ))}

        </List>
    )
}

export default ContactList;