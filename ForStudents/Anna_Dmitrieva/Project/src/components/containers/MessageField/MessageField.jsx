import React, { Component } from "react";
import MsgInput from "@components/MsgInput";
import MessageList from "@containers/MessageList";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { loadMessages, sendMessage} from '@actions/messages';

import "./style.scss";

class MessageField extends Component { // export default 
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            // messages: [
            //     { name: "Бот", text: "Привет" },
            //     { name: "Бот", text: "Как у тебя дела?" },
            // ],
        };
        this.chatContainer = React.createRef();
        // this.textInput = React.createRef(); // change to autofocus
    };
    // componentDidMount() { // change to autofocus
    //     this.textInput.current.focus();
    // };
    sendMessage = (message) => {
        if (!message) {
        } else {
            this.props.send('Анна', this.state.input); //вызов функции отправки через action
            this.setState({
                // messages: [...this.state.messages, { text: message, name: "Анна" }],
                input: "",
            },
                () => this.scrollToMyRef(),
            );
        };
    };
    scrollToMyRef = () => {
        const scroll = this.chatContainer.current.scrollHeight - this.chatContainer.current.clientHeight;
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
        } else {
            this.sendMessage();
        }
    };
    render() {
        return (
            <div className="field-chat-list">
                <MessageList
                    messages={ this.props.messages }
                    scroll={ this.chatContainer }
                />
                <MsgInput
                    // focus={ this.textInput } // change to autofocus
                    clearInput={ this.state.input }
                    click={ () => this.handleClick(this.state.input) }
                    change={ this.handleChange }
                    keyup={ (e) => this.handleKeyUp(e, this.state.input) }
                />
            </div>
        );
    };
};

const mapState = ({ messagesReducer }) => ({ 
    messages: messagesReducer.messages,
});
const mapActions = dispatch => bindActionCreators({ load: loadMessages, send: sendMessage }, dispatch);

export default connect(mapState, mapActions)(MessageField);