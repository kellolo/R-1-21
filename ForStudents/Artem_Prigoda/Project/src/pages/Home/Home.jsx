import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';
import MsgInput from '@components/MsgInput';
import { StylesProvider } from '@material-ui/core/styles';

import './style.scss';

export default props => {

    return <StylesProvider>
        <div className="container">
            <Header name={props.name} />
            <ChatsList />
            <MessageList />
        </div>
    </StylesProvider>

}