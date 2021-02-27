import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

import TextField from '@material-ui/core/TextField';
import Message from '@components/Message';
//stateFull


export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: 'owner', text: 'Hey!' },
                { name: 'owner', text: 'How are you?' }
            ],
            value: ''
        };
        this.owner = 'owner';

    }
    handleChange = event => {
        if (event.keyCode !== 13) {
            this.setState({ value: event.target.value });
        } else {
            this.sendMessage();
        }
    };
    sendMessage = () => {
        this.setState({
            value: '',
            messages: [...this.state.messages, {
                name: this.owner, text: this.state.value
            }],

        });
    };
    componentDidUpdate = () => {
        if (this.state.messages[this.state.messages.length - 1].name !== 'bot') {
            this.setState({
                messages: [...this.state.messages, {
                    name: 'bot', text: 'welcome'
                }]
            });
        }
    };

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) =>
            <Message
                key={'msg_' + i}
                name={el.name}
                text={el.text}
            />);

        return <div className="layout">
            <div className="message-list">
                {Messages}
            </div>
            <div className="message-list--input">
                {/* <TextField
                    name="input"
                    fullWidth={true}
                    hintText="Введите сообщение"
                    style={{ fontSize: '22px' }}
                    onChange={this.handleChange}
                    value={this.state.value}
                    onKeyUp={this.handleChange}
                /> */}
                <TextField
                    name="input"
                    id="standard-basic"

                    fullWidth={true}
                    style={{ fontSize: '22px' }}
                    onChange={this.handleChange}
                    value={this.state.value}
                    onKeyUp={this.handleChange}
                />
                <button onClick={this.sendMessage}>send</button>
            </div>
            {/* <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                onKeyUp={this.handleChange}
            />
            <button onClick={this.sendMessage}>send</button> */}

        </div>;

    }
};