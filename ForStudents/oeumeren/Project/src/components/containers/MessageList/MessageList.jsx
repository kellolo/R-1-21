import React, { Component } from "react";

import Message from "@components/Message/";

import styles from "./styles.module.scss"

class MessageList extends Component {
    messagesWindow = null;

    constructor(props) {
        super(props);

        this.messagesWindow = React.createRef()

        this.state = {
            messages: [{ author: "Оксана", text: "Привет!" }]
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.messages[this.state.messages.length - 1].author !== "Robot") {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, { author: "Robot", text: "Нормально." }]
                })
            }, 1000)
        }

        if (prevState.messages.length < this.state.messages.length) {
            this.messagesWindow.current.scrollTop = this.messagesWindow.current.scrollHeight
        }
    }

    handleClick = () => {
        this.setState({
            messages: [...this.state.messages, { author: "Оксана", text: "Как дела?" }]
        })
    }

    render() {
        const {messages} = this.state;

        return (
            <div className={styles.wrapper}>

                <div className={styles.message__list}
                     ref={this.messagesWindow}
                >
                    {messages.map((message, i) => (
                        <Message message={message} key={i} />
                    ))}
                </div>

                <button className={styles.btn__send}
                        onClick={() => this.handleClick()}
                >
                    Спросить, как дела
                </button>

            </div>
        )
    }
}

export default MessageList;