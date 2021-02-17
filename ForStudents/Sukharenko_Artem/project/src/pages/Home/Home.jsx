import React from 'react';
// import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import MsgInput from '@components/MsgInput';

import './style.scss';

export default () => {

    return <div className="container"> 
        {/* <MsgInput /> */}
        <div className="user__list">
            <div className="user__list_name active">two</div>
            <div className="user__list_name">bot</div>
        </div>
        <MessageList />
    </div>;
}