import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';
import MsgInput from '@components/MsgInput';
import { StylesProvider } from '@material-ui/core/styles';
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import './style.scss';




export default props => {
    return <StylesProvider>
        <div className="container">
            <ChatsList chatId={props.chatId} />
            <div className="messages--base">
                <Header name={ props.chatId } />
                <MessageList chatId={ props.chatId }/>
            </div>
        </div>
    </StylesProvider>

}