import React, {useState} from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from '@material-ui/icons/Add';
import Modal from "@components/Modal";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addChat } from "@actions/chatActions.js";

import styles from "./styles.module.scss";

const ChatList = (props) => {
    const {chatId, chats, addChat} = props;
    const [contacts, setContacts] = useState(['Контакт 1', 'Контакт 2', 'Контакт 3']);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.chat__list}>

            <List component="nav">
                {chats.map((item, i) => (
                    <Link to={`/chat/${item.id}`} key={i}>
                        <ListItem button
                                  selected={chatId === item.id}>
                            <ListItemText primary={`${item.title}`}/>
                        </ListItem>
                    </Link>
                ))}

                {contacts.length > 0 && (
                    <ListItem button
                              onClick={() => setIsOpen(true)}
                    >

                        <ListItemAvatar>
                            <Avatar>
                                <AddIcon />
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary="Добавить чат" />

                    </ListItem>
                )}

            </List>

            <Modal open={isOpen}
                   onClose={() => setIsOpen(false)}
                   title="Выберите контакт"
                   contacts={contacts}
                   onSelect={(value) => {
                       setIsOpen(false);
                       addChat(value);
                       setContacts(contacts.filter((item) => item !== value));
                   }} />

        </div>
    )
}

const mapStateToProps = (store) => ({
    chats: store.chatReducer.chats
});

const mapDispatchToProps = (dispatch) => ({
    addChat: (title) => dispatch(addChat(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);