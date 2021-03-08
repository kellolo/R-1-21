import React from 'react';
// import ReactDom from 'react-dom';
import Header from '@components/Header';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import MsgInput from '@components/MsgInput';
import { StylesProvider } from '@material-ui/core/styles';

import './style.scss';

export default (props) => {
    return <StylesProvider>
        <div className="wrp">
            {/* <MsgInput /> */}
            <Header name={ props.name }/>
            <ChatsList />
            <MessageList />
        </div>
    </StylesProvider>
}
