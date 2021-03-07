
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import './style.scss';

import ChatsDialog from '@components/ChatsDialog';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat } from '@actions/chats';


class Chatslist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // activeChats: [
            //     { id: '1', name: "User1" },
            //     { id: '2', name: "User2" },
            //     { id: '3', name: "User3" },
            // ],
            // contactList: [
            //     { id: '4', name: "User4" },
            //     { id: '5', name: "User5" },
            // ]

        };
    }

    // addChat = (id) => {
    //     const { contactList } = this.state;
    //     const { activeChats } = this.state;
    //     const ind = contactList.findIndex(item => item.id === id);
    //     activeChats.push(...contactList.splice(ind, 1));

    //     this.setState({ activeChats });
    //     this.setState({ contactList });
    // }
    render() {
        // const { activeChats } = this.state;
        // const { activeChats } = this.props; 
        
        const { activeChats } = this.props;
        
        const ActiveChats = Object.keys(activeChats).map(chatId =>
            <Link to={`/chat/${chatId}`} key={chatId}>
                <ListItemText primary={activeChats[chatId].name} />
                <Divider />
            </Link>
       );
        return <div className="chatslist">
            <h2 className="chatslist--title">Чаты</h2>
            <List className="chatlist--items">
                {ActiveChats}
            </List>
            <ChatsDialog add={this.props.addChat} list={[...this.props.contactList]} />
        </div>;
    }
};

const mapStateToProps = ({ chatsReducer }) => ({
    activeChats: chatsReducer.activeChats,
    contactList: chatsReducer.contactList
});
const mapActions = dispatch => bindActionCreators({ addChat }, dispatch);
export default connect(mapStateToProps, mapActions)(Chatslist);
