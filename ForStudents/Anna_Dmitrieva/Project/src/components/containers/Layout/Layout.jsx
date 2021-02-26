// import React from 'react';
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import MessageList from "@containers/MessageList";
import MsgInput from "@components/MsgInput";
import Header from "@components/Header";
import ChatList from "@components/ChatList";

import "./style.scss";

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            messages: [
                { name: "Бот", text: "Привет" },
                { name: "Бот", text: "Как у тебя дела?" },
            ],
        };
    };
    // componentDidUpdate() {
    // if (this.state.messages[this.state.messages.length - 1].name === "Анна") {
    //   setTimeout(
    //     () =>
    //       this.setState({
    //         messages: [
    //           ...this.state.messages,
    //           { text: "Не приставай ко мне, я робот!", name: "Бот" },
    //         ],
    //       }),
    //     1000
    //   );
    // };
    //   console.log(444);
    // };
    sendMessage = (message) => {
        if (!message) {
        } else {
            this.setState({
                messages: [...this.state.messages, { text: message, name: "Анна" }],
                input: "",
            });
        };
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
        }
        this.sendMessage();
    };
    render() {
        return (
            <div className="layout-main">
                <Header />
                <div className="main_list">
                    <ChatList />
                    <MessageList messages={this.state.messages} />
                    <MsgInput
                        clearInput={this.state.input}
                        click={() => this.handleClick(this.state.input)}
                        change={this.handleChange}
                        keyup={(e) => this.handleKeyUp(e, this.state.input)}
                    />
                </div>
            </div>
        );
    };
};