import React, { Component } from "react";

import Header from "@components/Header";
import ChatList from "@containers/ChatList";
import MessageList from "@containers/MessageList";

import styles from "./styles.module.scss";

const Home = (props) => {
    const {chatId} = props;

    return (
        <div className={styles.wrapper}>
            <Header />
            <ChatList chatId={chatId} />
            { chatId ? (
                <MessageList chatId={chatId} />
            ) : <p style={{ margin: "0", padding: "20px" }}>Выберите чат слева</p>}
        </div>
    )
}

export default Home;