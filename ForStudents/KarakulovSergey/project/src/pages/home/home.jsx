import React from 'react';
import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import Msginput from '@components/Msginput';
import AppStatic from '@components/AppStatic';


import './style.scss';

export default () => {
    return <div>
                <MessageList />
            </div>
}