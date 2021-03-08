import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';
import MsgInput from '@components/MsgInput';

import './style.scss';
import { StylesProvider } from '@material-ui/core';

export default props => {
    return <StylesProvider>
        <div className="content">
            <Header id={ props.id } />
            <div className="interactive">
            {/* <MsgInput /> */}
            <ChatsList />
            { props.id && <MessageList chatId={ props.id }  /> }
            </div>
        </div>
    </StylesProvider>;
}