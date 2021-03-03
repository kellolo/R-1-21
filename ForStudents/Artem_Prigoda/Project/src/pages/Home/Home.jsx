import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';
import MsgInput from '@components/MsgInput';
import { StylesProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import './style.scss';

export default props => {

    return <StylesProvider>
        <Paper elevation={2} className="container" >

            <ChatsList chatId={props.chatId} />


            <div className="messages">
                <Paper elevation={2} className="header" >
                    <Header name={props.name} />
                </Paper>
                <MessageList />
            </div>


        </Paper>
    </StylesProvider>

}