import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMsg } from '@actions/messages';

import './style.scss';
export class MsgInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msgText: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.textInput = React.createRef();
    }

    //Ставим фокус на<input> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    }
    componentDidUpdate() {
        this.textInput.current.focus();
    }

    handleChange(e) {
        this.setState({
            msgText: e.target.value
        })
    }
    handleSend(e) {
        if (e.target.name !== 'input' || e.keyCode === 13) {
            this.send();
        }
    }

    send() {
        const { msgText } = this.state;
        if (!msgText) {
            return;
        }

        const { chatID, messages, sendMsg } = this.props;
        const msgID = (Object.keys(messages).length + 1).toString();
        sendMsg(msgID, 'User', msgText, chatID);

        this.setState({
            msgText: ''
        })
    }

    render() {
        const { msgText } = this.state;
        return <div className="sendmsg">
            <TextField
                name='input'
                className='sendmsg__input'
                onChange={this.handleChange}
                value={msgText}
                onKeyUp={(e) => this.handleSend(e)}
                inputRef={this.textInput}
            />
            <Button
                variant="contained"
                color="primary"
                className='sendmsg__btn'
                onClick={this.handleSend}
                endIcon={<SendIcon />} >
                Send
            </Button>
        </div>
    }

}

const mapStateToProps = ({ chatsReducer, messagesReducer }) => ({
    chats: chatsReducer.chats,
    messages: messagesReducer.messages
});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMsg }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MsgInput);