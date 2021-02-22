import React from 'react';
import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
//import Msginput from '@components/Msginput';
//import AppStatic from '@components/AppStatic';
import ChatList from '@containers/ChatList';
import Header from '@containers/Header';

import './style.scss';

export default () => {
    return <div>
                <Header />
                <div id="chatbody">
                    <div id="chatlist">
                        <ChatList />
                    </div>
                    
                        <MessageList />
                    
                </div>
            </div>
}