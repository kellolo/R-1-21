import React, { Component } from 'react';
import './style.scss';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import { Link } from 'react-router-dom';

import Dialog from '@components/Dialog';

import { connect } from 'react-redux';
import redux, { bindActionCreators } from 'redux';
import { loadChats } from '@actions/chats' ;


class ChatList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeChats: [
                { name: 'Ira', id: '1' },
                { name: 'Alex', id: '2' },
                { name: 'Zo', id: '3' },
                { name: 'Mary', id: '4' }
            ]
        };
    }

    addChat = (name) => {
            this.setState({ activeChats: [...this.state.activeChats, { name, id: Date.now() }] });
    }
    
    componentDidMount(){
        // this.props.loadChats('UserName');
    }

render() {
    const { chats } = this.props;
    const Chats = chats.map((el, i) => <Link to ={ `/chat/${el.id}` } key={ i }><ListItem button ><ListItemAvatar><Avatar></Avatar></ListItemAvatar><ListItemText primary={ el.name } /></ListItem></Link>);

    return <div className="chatslist">
                    { Chats }
                <Divider />
                <Dialog add={ this.addChat } />

        </div>;
    }
};


const mapState = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});

const mapActions = dispatch => bindActionCreators({ loadChats }, dispatch);

export default connect(mapState, mapActions)(ChatList);