import React, {useEffect, useState} from "react";

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
import { addChat, loadChats } from "@actions/chatActions.js";

import styles from "./styles.module.scss";

const ChatList = (props) => {
    const {chatId, chats, highlighted, loadChats, addChat, push} = props;
    const [contacts, setContacts] = useState(['Контакт 1', 'Контакт 2', 'Контакт 3']);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        loadChats();
    }, []);

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
                   contacts={ contacts }
                   onSelect={(value) => {
                       setIsOpen(false);
                       addChat(value);
                       setContacts(contacts.filter((item) => item !== value));
                   }} />

        </div>
    )
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    highlighted: chatReducer.highlighted
});

const mapDispatchToProps = (dispatch) => bindActionCreators({loadChats, addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);