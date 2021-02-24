import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import './style.scss';
export default class MsgInput extends Component {

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
        this.props.sendMsgHandler('User', msgText);
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