import React, { useState } from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from '@material-ui/icons/Add';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Modal from "@components/Modal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import { addChat } from "@actions/chatActions.js";
import { removeContact } from "@actions/contactsActions";

import styles from "./styles.module.scss";

const ChatList = (props) => {
    const {chatId, chats, contacts, highlighted, addChat, push, removeContact} = props;
    const [isOpen, setIsOpen] = useState(false);

    const renderChats = () => (
        chats.map((item, i) => {
            const isHighlighted = highlighted.indexOf(item.id) > -1;

            return (
                <ListItem button
                          onClick={() => push(`/chat/${item.id}`)}
                          key={ i }
                          selected={ chatId === item.id }>
                    <ListItemText primary={ `${item.title}` }/>
                    { isHighlighted && <MailOutlineIcon className={styles.highlighted}/> }
                </ListItem>
            )
        })
    );

    return (
        <div className={styles.chat__list}>

            <List component="nav">
                { renderChats() }

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

            <Modal open={ isOpen }
                   onClose={() => setIsOpen(false)}
                   title="Выберите контакт"
                   onSelect={(name, id) => {
                       setIsOpen(false);
                       addChat(name);
                       removeContact(id)
                   }} />

        </div>
    )
}

const mapStateToProps = ({ chatReducer, contactsReducer }) => ({
    chats: chatReducer.chats,
    highlighted: chatReducer.highlighted,
    contacts: contactsReducer.contacts
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addChat, push, removeContact }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);