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

class ChatsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // activeChats: []
        };
    }

    // addChat = (props) => {
    //         console.log(props);
    //         this.setState({ activeChats: [...this.state.activeChats, { name: name, id: Date.now() }] });
    // }
    
render() {
    const { activeChats } = this.props;
    const Chats = activeChats.map((el, i) => <Link to ={ `/chat/${el.id}` }><ListItem button key={ i }><ListItemAvatar><Avatar></Avatar></ListItemAvatar><ListItemText primary={ el.name } /></ListItem></Link>);
    return <div className="chatslist">
                    { Chats }
                <Divider />
                <Dialog add={ this.addChat } />

        </div>;
    }
};

const mapState = ({ chatsReducer }) => ({
    activeChats: chatsReducer.activeChats
});

const mapActions = dispatch => bindActionCreators({ load: loadChats }, dispatch);


export default connect(mapState, null)(ChatsList);