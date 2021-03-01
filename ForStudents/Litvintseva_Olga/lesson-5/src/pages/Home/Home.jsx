
import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import ChatList from '@containers/ChatList';
import MessageList from '@containers/MessageList';

export default props => {

    return <StylesProvider>
                <div className="home_page">
                    <div className="messenger">
                        <div className="header">{ props.name }</div>
                        <div className="messenger_container">
                            <ChatList />
                            <MessageList />
                        </div> 
                    </div>           
                </div>;
            </StylesProvider>

}