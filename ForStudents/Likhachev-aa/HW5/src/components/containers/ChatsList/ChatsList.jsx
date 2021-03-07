import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

import ContactsList from "@components/ContactsList";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SelectedListItem from "@components/SelectedListItem";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addChat } from "@actions/chats";

export default class ChatsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatName: [
                { name: 'Andrew', id: '1' },
                { name: 'Bart', id: '2' },
                { name: 'Tom', id: '3' },
                { name: 'John', id: '4' },
            ],
        };
    }

    addChat = name => {
        this.setState({ chatName: [...this.props.chatName, { name }] });
    }

    render() {
        const chatName = this.props.chatName.map((el, i) => {
            return <ListItem button key={'userID' + i}>
                <ListItemIcon>
                    < ArrowForwardIcon />

                </ListItemIcon>
                <ListItemText primary={<Link to={`/chat/${el.id}`} >{el.name}</Link>} />
            </ListItem>
        });


        return <div className="chats-list">
            <List>
                {chatName}
            </List>

            <SelectedListItem />
            { }
            <ContactsList add={this.addChat} />
        </div>;
    }

};

const mapState = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});

const mapAction = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapState, mapAction)(ChatsList);