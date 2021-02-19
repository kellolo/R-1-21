import React from 'react';
import MessageList from '@containers/MessageList';


import './style.scss';

export default () => {

    return  <div/*  className="message_list" */>
                { <MessageList /> }
            </div>;
}