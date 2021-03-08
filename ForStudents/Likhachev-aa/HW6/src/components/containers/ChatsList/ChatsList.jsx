import React, { Component } from 'react';
import './style.scss';
import ContactsList from "@containers/ContactsList";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import { push } from 'connected-react-router';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addChat } from "@actions/chats";

class ChatsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedIndex: '',
        };
    }

    addChat = (userId, name) => {
        const check = this.props.chats.filter( (el) => el.userId === userId);
        if (check.length === 0) {
            const title = 'Chat with ' + name;
            this.props.addChat(title, userId);
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

    handleNavigate(chatId) {
        this.setSelectedIndex(chatId);
        this.props.push(`/chat/${chatId}`);
    }

    render() {
        const chatsList = (
            <List>
                { this.props.chats.map( (el, i) =>
                        <ListItem
                            button
                            key={ 'chatID' + i }
                            selected={ this.getSelectedIndex(i) }
                            onClick={ () => this.handleNavigate(i) } >
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary={ el.title } />
                        </ListItem>
                ) }
            </List>
        );

        return <div className="chats-list">
            { chatsList }
            <ContactsList add={ this.addChat } />
        </div>;
    }
}

const mapState = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});

const mapAction = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapState, mapAction)(ChatsList);

