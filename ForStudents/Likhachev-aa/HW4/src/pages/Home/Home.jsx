import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import Header from '@components/Header';
import { StylesProvider } from '@material-ui/core/styles';

import './style.scss';

export default props => {

    return <StylesProvider>
        <h1>Chat with {props.name}</h1>
        <div className="home">
            <Header />
            <div className="home__chats">
                <ChatsList />
                <MessageList />
            </div>
        </div>
    </StylesProvider>;
}