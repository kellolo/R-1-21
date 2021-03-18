import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import Message from '@components/Message';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage, loadMessages } from '@actions/messages';
import redux from 'redux';


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // messages: [
            //     { name: 'owner', text: 'Hey!' },
            //     { name: 'owner', text: 'How are you?' }
            // ],
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
         
        this.props.sendMessage(this.props.chatId, Date.now(), this.state.value, this.owner);
        this.setState({
            value: ''
        });
    };
    
    async componentDidMount() {
       await this.props.loadMessages(this.props.userLogin, this.props.activeChat);
    };
 
    render() {
        const { messages, activeChats, chatId } = this.props;
        // const Messages = activeChats[chatId].message.map((messageId, index) => {
        //     const message = messages.find(item => +item.id === messageId);            
        //     return <Message
        //         key={index}
        //         name={message.name}
        //         text={ message.text }
        //     />;
        // });
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
                    fullWidth={true}
                    style={{ fontSize: '22px' }}
                    onChange={this.handleChange}
                    value={this.state.value}
                    onKeyUp={this.handleChange}
                />
                {/* <button onClick={this.sendMessage}>send</button> */}
                <Fab color="secondary" aria-label="add" onClick={this.sendMessage} className="message-list--button" >
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
const mapActions = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);
export default connect(mapStateToProps, mapActions)(MessageList);