import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './style.scss';
import Chat from '@components/Chat';
import { Link } from 'react-router-dom';
import ChatsDialog from '@components/ChatsDialog';
//stateFull

import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";


const useStyles = (theme) => ({
    addButton: {
        margin: theme.spacing(0)
    },

});

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [
                { id: '0', userName: 'user_1', lastMessage: { name: 'user_1', text: 'Hey!' } },
                { id: '1', userName: 'user_2', lastMessage: { name: 'user_2', text: 'How are you?' } },
                { id: '2', userName: 'user_3', lastMessage: { name: 'user_3', text: 'How are you?' } },
                { id: '3', userName: 'user_4', lastMessage: { name: 'user_4', text: 'How are you?' } }
            ],
        };
    }

    addChat = (userName) => {

        this.setState({
            chats: [...this.state.chats, {  id: this.state.chats.length, userName, lastMessage: {} }]
        });
    }

    render() {
        const { chats } = this.state;

        const Chats = chats.map((el, i) =>
            <Chat
                key={'cht_' + i}
                userName={el.userName}
                lastMessage={el.lastMessage}
                
            />);
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className="chat__wrapper" scroll='paper'>
                    <List>
                        {Chats}
                    </List>

                    <ChatsDialog add={this.addChat} />
                </Paper>
            </React.Fragment>
        );



    }
};

export default withStyles(useStyles)(ChatList);
