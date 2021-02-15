import React from 'react';
import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';
import Msginput from '@components/Msginput';

import './style.scss';

export default () => {
    return <div>
                <Msginput />
                <MessageList />
            </div>
}