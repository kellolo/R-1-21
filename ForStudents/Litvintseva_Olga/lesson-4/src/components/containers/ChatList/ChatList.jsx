
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactList from '@containers/ContactList';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

export default class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [
                { name: 'Оля Попова', id: '7' },
                { name: 'Женя Смирнов', id: '8' },
                { name: 'Таня Морозова', id: '9' },
                { name: 'Ваня Кукушкин', id: '10' }
            ]
        }
    }

    addChat = contact => {
        if (!this.state.chats.find(item => item.id == contact.id)) {
            this.setState({ chats: [...this.state.chats,  contact ] });
        }   
    }

    render () {
        const { chats } = this.state;

        return  <div className="chat_field">
                    <List className="chat_list">
                        {chats.map((el, i) => (
                            <Link to = { `/chat/${ el.id }` } className="chat_link" key={ i }>
                                <ListItem key={ i }>
                                    <ListItemAvatar>
                                        <Avatar className="chat_avatar">
                                            <PersonIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={ el.name }/>
                                </ListItem>
                            </Link>    
                        ))} 
                    </List>
                    <ContactList add={ this.addChat } />              
                </div>;
    }
}