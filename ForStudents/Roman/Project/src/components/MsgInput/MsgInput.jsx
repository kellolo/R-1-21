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
        this.props.sendMsg(this.state.msg)
    }

    getMsg = (elem) => {
        this.setState({
            msg: elem.target.value
        });
    }

    render() {
        return <div>
            <input type="text" className="enter-text" onInput={this.getMsg} />
            <button className="pulse" onClick={this.sendRequest}>Send</button>
        </div>;
    }

}