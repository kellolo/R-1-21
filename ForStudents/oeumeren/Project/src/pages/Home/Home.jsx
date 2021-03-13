import React, {Component, useEffect} from "react";

import Header from "@components/Header";
import ChatList from "@containers/ChatList";
import MessageList from "@containers/MessageList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadUser } from "@actions/userActions.js";
import { loadChats } from "@actions/chatActions.js";
import { loadContacts } from "@actions/contactsActions";

import styles from "./styles.module.scss";

const Home = (props) => {
    const { chatId, user, loadUser, loadChats, loadContacts } = props;

    useEffect(() => {
        loadUser();
    }, []);

    useEffect(() => {
        if (user.id) {
            loadChats(user.id)
            loadContacts(user.id)
        }
    }, [user]);

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

const mapStateToProps = ({ userReducer }) => ({
    user: userReducer.user
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ loadUser, loadChats, loadContacts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);