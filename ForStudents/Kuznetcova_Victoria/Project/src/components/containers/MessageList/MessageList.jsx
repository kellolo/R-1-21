import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';

import SendIcon from '@material-ui/icons/Send';

import { connect } from 'react-redux';
import redux, { bindActionCreators } from 'redux';

import { loadMessages, sendMessages } from '@actions/messages';


class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.sendMessage();
        }
    };

    sendMessage = () => {
        this.props.send('Username', this.state.text);
        this.setState({
            text: '',
            });
           
    };

    async componentDidMount() {
         await this.props.loadMessages(this.props.user.user.id, this.props.activeChat);
    };

    render() {
        const { messages } = this.props;
        const Messages = messages.map((el,i) => 
        <Message 
                key={ i } 
                name={ el.name }
                text= { el.text }
        />);
    return <div className="message-list">
        <div className="message-list_wrp">
            { Messages }
        </div>
        <div className="message-list_input">
                <input 
                    type="text" 
                    value = { this.state.text } 
                    onChange = { this.handleChange }
                    onKeyUp = { this.handleChange }
                    className="input-text"
                />
                {/* <SendIcon /> */}
            <button onClick={ this.sendMessage } className="input-btn"><SendIcon /></button>
        </div>
    </div>;

    }
};


const mapState = ({ messagesReducer, userReducer, chatsReducer }) => ({
    messages: messagesReducer.messages,
    user: userReducer,
    activeChat: chatsReducer.activeChat
});

const mapActions = dispatch => bindActionCreators({  loadMessages, send: sendMessages }, dispatch);


export default connect(mapState, mapActions)(MessageList);