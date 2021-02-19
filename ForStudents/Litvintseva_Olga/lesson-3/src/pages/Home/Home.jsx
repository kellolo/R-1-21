import React from 'react';
// import ReactDom from 'react-dom';

import ChatList from '@containers/ChatList';
import MessageList from '@containers/MessageList';

export default () => {

    return <div className="home_page">
                <div className="messenger">
                    <ChatList />
                    <MessageList /> 
                </div>           
        </div>;
}