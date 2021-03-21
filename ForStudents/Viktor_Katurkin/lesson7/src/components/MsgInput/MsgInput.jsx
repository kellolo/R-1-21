import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default class MsgInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
    }

    sendRequest = () => {
        if (this.state.msg)
            this.props.sendMsg(this.state.msg);
        this.state.msg = '';
    }

    getMsg = (elem) => {
        this.setState({
            msg: elem.target.value
        });
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ msg: evt.target.value });
        } else {
            if (this.state.msg)
                this.sendRequest();
        }
    };

    render() {
        return <div className="after-chat">
            <input
                type="text"
                className="enter-text"
                value={this.state.msg}
                onChange={this.handleChange}
                onKeyUp={this.handleChange}
            />
            <button className="pulse" onClick={this.sendRequest}>Send</button>
        </div>;
    }

}