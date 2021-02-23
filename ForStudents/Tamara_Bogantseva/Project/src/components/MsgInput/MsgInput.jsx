import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default class MsgInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.userSend(this.state.value);
    }
    render() {
        return (
            <form >
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="msg-btn" onClick={this.handleSubmit}>&#5129;</button>
            </form>
        );
    }

};