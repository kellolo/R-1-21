import React, { Component } from 'react';

import './style.scss';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import Message from '@components/Message';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage, loadMessages } from '@actions/messages';
import { getActiveChat } from '@actions/chats';



class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.owner = 'owner';
        
    }
    static defaultProps = {
        chatId: 1,
    };
    handleChange = event => {
        if (event.keyCode !== 13) {
            this.setState({ value: event.target.value });
        } else {
            this.sendMessage();
        }
    };
    sendMessage = () => {
        const user = this.props.userLogin;
        const chat = this.props.chatId;

        const payload = {
            name: this.props.userLogin,
            text: this.state.value,
            date: Date.now()
        };

        this.props.sendMessage(payload, chat, user);
        this.setState({
            value: ''
        });
    };
    
    async componentDidMount() {
        await this.props.loadMessages(this.props.userLogin, this.props.chatId);
    };


 
    render() {
        const { messages } = this.props;
        const Messages = messages.map((message, index) => {
                return <Message
                    key={ index }
                    name={ message.name }
                    text={ message.text }
                />;
            });
        
        return <div className="layout">
            <div className="message-list">                
                { Messages }
            </div>
            <div className="message-list--input">
                <TextField
                    name="input"
                    id="standard-basic"
                    fullWidth= { true }
                    style={{ fontSize: '22px' }}
                    onChange={ this.handleChange }
                    value={ this.state.value }
                    onKeyUp={ this.handleChange }
                />
                <Fab color="secondary" aria-label="add" onClick={ this.sendMessage } className="message-list--button" >
                    <SendIcon />
                </Fab>
            </div>
        </div>;
    }
};

const mapStateToProps = ({ messagesReducer, chatsReducer, userReducer }) => ({
    messages: messagesReducer.messages,
    activeChats: chatsReducer.activeChats,
    userLogin: userReducer.login,
    activeChat: chatsReducer.activeChat
});
const mapActions = dispatch => bindActionCreators({ getActiveChat, sendMessage, loadMessages }, dispatch);
export default connect(mapStateToProps, mapActions)(MessageList);