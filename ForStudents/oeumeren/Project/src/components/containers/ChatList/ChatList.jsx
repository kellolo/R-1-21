import React, {useState} from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from '@material-ui/icons/Add';
import Modal from "@components/Modal";

import styles from "./styles.module.scss"

const ChatList = () => {
    const [list, setList] = useState([
        { name: "Чат 1" }, { name: "Чат 2" }, { name: "Чат 3" }
    ]);
    const [contacts, setContacts] = useState(['Контакт 1', 'Контакт 2', 'Контакт 3']);
    const [selected, setSelected] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.chat__list}>

            <List component="nav">
                {list.map((item, i) => (
                    <ListItem key={i}
                              button
                              selected={selected === i}
                              onClick={() => setSelected(i)}>
                        <ListItemText primary={`${item.name}`}/>
                    </ListItem>
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
                       setList([...list, { name: value }])
                       setContacts(contacts.filter((item) => item !== value))
                   }} />

        </div>
    )
}

export default ChatList;