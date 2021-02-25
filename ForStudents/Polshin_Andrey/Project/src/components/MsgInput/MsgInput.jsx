import React, { Component } from 'react';
//import ReactDom from 'react-dom';

import './style.scss';

export default class MsgInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgText: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }
    handleChange(e) {
        this.setState({
            msgText: e.target.value
        })
    }
    handleSend(e) {
        this.props.sendMsgHandler('User', this.state.msgText)
        this.setState({
            msgText: ''
        })
    }

    render() {
        const to = this.props.to;
        const text = this.state.msgText;
        return <div className="sendmsg">
            <input
                className='sendmsg-input'
                placeholder="Enter your message"
                value={to ? `${to},${text}` : text}
                onChange={this.handleChange}
                type="text" />
            <button className='sendmsg-btn' onClick={this.handleSend}>Send</button>
        </div>;
    }

}