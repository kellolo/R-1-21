import React from 'react';
import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
//import Msginput from '@components/Msginput';
//import AppStatic from '@components/AppStatic';
import ChatList from '@containers/ChatList';
import Header from '@containers/Header';
import {StylesProvider} from '@material-ui/core/styles';
import './style.scss';
export default props => {
    return (
        <StylesProvider>
            <div>
                <Header name={props.name} />
                <div id="chatbody">
                    <div id="chatlist">
                        <ChatList />
                    </div>
                    
                        <MessageList />
                    
                </div>
            </div>
        </StylesProvider>
            );
}