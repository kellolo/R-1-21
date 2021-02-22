import React, { Component } from "react";

import MessageList from "@containers/MessageList/";
import Header from "@components/Header";
import ChatList from "@containers/ChatList";

import styles from "./styles.module.scss";

class Home extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Header />
                <ChatList />
                <MessageList />
            </div>
        )
    }
}

export default Home;