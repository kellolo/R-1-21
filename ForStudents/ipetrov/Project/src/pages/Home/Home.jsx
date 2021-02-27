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
            <Header name={props.name}/>
            <div className="interactive">
            {/* <MsgInput /> */}
            <ChatsList />
            <MessageList />
            </div>
        </div>
    </StylesProvider>;
}