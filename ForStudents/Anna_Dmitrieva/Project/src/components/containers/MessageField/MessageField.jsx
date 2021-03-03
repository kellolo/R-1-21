// // import React from 'react';
import React, { Component } from "react";
// // import ReactDOM from 'react-dom';
import MsgInput from "@components/MsgInput";
import MessageList from "@containers/MessageList";

import "./style.scss";

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            messages: [
                { name: "Бот", text: "Привет" },
                { name: "Бот", text: "Как у тебя дела?" },
            ],
        };
        this.chatContainer = React.createRef();
        this.textInput = React.createRef();
    };
    componentDidMount() {
        this.textInput.current.focus();
    };
    sendMessage = (message) => {
        if (!message) {
        } else {
            this.setState({
                messages: [...this.state.messages, { text: message, name: "Анна" }],
                input: "",
            },
                () => this.scrollToMyRef(),
            );
        };
    };
    scrollToMyRef = () => {
        const scroll =
            this.chatContainer.current.scrollHeight -
            this.chatContainer.current.clientHeight;
        // console.log(this.chatContainer.current.scrollHeight);
        // console.log(this.chatContainer.current.clientHeight);
        this.chatContainer.current.scrollTo(0, scroll);
    };
    handleClick = (message) => {
        this.sendMessage(message);
    };
    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            this.sendMessage(message);
        };
    };
    handleChange = (event) => {
        if (event.keyCode !== 13) {
            this.setState({ input: event.target.value });
        };
        this.sendMessage();
    };
    render() {
        return (
            <div className="field-chat-list">
                <MessageList
                    messages={ this.state.messages }
                    scroll={ this.chatContainer }
                />
                <MsgInput
                    focus={ this.textInput}
                    clearInput={ this.state.input }
                    click={ () => this.handleClick(this.state.input) }
                    change={ this.handleChange }
                    keyup={ (e) => this.handleKeyUp(e, this.state.input) }
                />
            </div>
        );
    };
};