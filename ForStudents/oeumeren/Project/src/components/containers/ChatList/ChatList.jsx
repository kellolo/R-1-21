import React, {useState} from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from '@material-ui/icons/Add';
import Modal from "@components/Modal";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const ChatList = (props) => {
    const {chatId} = props;
    const [list, setList] = useState([
        { id: "1", name: "Чат 1" },
        { id: "2", name: "Чат 2" },
        { id: "3", name: "Чат 3" }
    ]);
    const [contacts, setContacts] = useState(['Контакт 1', 'Контакт 2', 'Контакт 3']);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.chat__list}>

            <List component="nav">
                {list.map((item, i) => (
                    <Link to={`/chat/${item.id}`} key={i}>
                        <ListItem button
                                  selected={chatId === item.id}>

                            <ListItemText primary={`${item.name}`}/>
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
                       setList([...list, { id: `${list.length + 1}`, name: value }])
                       setContacts(contacts.filter((item) => item !== value))
                   }} />

        </div>
    )
}

export default ChatList;