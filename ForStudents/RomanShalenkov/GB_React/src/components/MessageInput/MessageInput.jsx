import React, { Component } from 'react';

import './style.scss';

export default class MessageInput extends Component {
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
        this.props.sendMsgHandler('Пользователь', this.state.msgText)
        this.setState({
            msgText: ''
        })
    }

    render() {
        const to = this.props.to;
        const text = this.state.msgText;
        return <div>
            <input
                placeholder="Введите сообщение"
                value={to ? `${to},${text}` : text}
                onChange={this.handleChange}
                type="text" />
            <button onClick={this.handleSend}>Отправить</button>
        </div>;
    }

}