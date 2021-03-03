import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatList from '@containers/ChatList';
import { StylesProvider } from '@material-ui/core/styles';

import './style.scss';

export default props => {

    return <StylesProvider>
        <ChatList />
        <MessageList nameChat={props.name} />
    </StylesProvider>;
}