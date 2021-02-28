import './style.scss';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ChatsDialog from '@components/ChatsDialog';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadChats } from '@actions/chats';

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    addChat = name => {
        this.setState({ activeChats: [...this.state.activeChats, { name, id: Date.now() }] });
    }

    render() {
        const { activeChats } = this.props;
        const Chats = activeChats.map((el, i) => <li key={i} className="chatlist-list__item">
            <Link to={`/chat/${el.id}`} >{el.name}</Link>
        </li>);

        return (
            <div className="chatlist">
                <ul className="chatlist-list">
                    {Chats}
                </ul>
                <ChatsDialog add={this.addChat} />
            </div>
        )
    }
}

// mapState - это когда вы берете данные прям из хранилища
const mapState = ({ chatsReducer }) => ({
    activeChats: chatsReducer.activeChats
});

const mapActions = dispatch => bindActionCreators({ load: loadChats }, dispatch);

export default connect(mapState, mapActions)(ChatList);