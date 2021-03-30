import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';
//stateFull

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMessages, sendMessage } from '@actions/messages';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    };

    sendMessage = (text) => {
        /* this.setState({
            messages: [...this.state.messages, {
                name: 'Bob',
                text: text
            }]
        }); */
        //this.props.send('Username', text);
        const user = this.props.user.user.id;
        const chat = this.props.active;

        const payload = {
            name: 'Username',
            text: text,
            date: new Date()
        };

        this.props.send(payload, chat, user);

        this.setState({
            text: ''
        });
    }

    async componentDidUpdate() {
        /*let msgs = [...this.state.messages];

        if (msgs[msgs.length - 1].name != 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, {
                        name: 'Bot',
                        text: 'Ваш вопрос очень важен для Вас!'
                    }]
                });
            }, 1000);
        }*/
        await this.props.loadMessages(this.props.user.user.id, this.props.active);
        // прокрутка чата вниз
        document.querySelector('.chat-thread').scrollTop = document.querySelector('.chat-thread').scrollHeight;
    }

    render() {
        const { messages } = this.props;
        const Messages = messages ? messages.map((el, i) =>
            <Message
                key={'msg_' + i}
                name={el.name}
                text={el.text}
            />) : <div></div>;
        /* let chatName = '';
        if (this.props.nameChat)
            chatName = <h2 className="chat-name">Переписка с пользователем "{this.props.nameChat}"</h2>; */

        return <div id="convo">
            <ul className="chat-thread">
                {Messages}
            </ul>
            <MsgInput sendMsg={this.sendMessage} />
        </div>;

    };


};

const mapState = ({ messagesReducer, userReducer, chatsReducer }) => ({
    messages: messagesReducer.messages,
    user: userReducer,
    activeChat: chatsReducer.activeChat
});

const mapActions = dispatch => bindActionCreators({ send: sendMessage, loadMessages }, dispatch);

export default connect(mapState, mapActions)(MessageList);