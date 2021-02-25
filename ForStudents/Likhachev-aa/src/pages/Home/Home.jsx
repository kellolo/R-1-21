
import React from 'react';
import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';

import './style.scss';

export default () => {

    return <div className='wrapper' >

        <main className='main'>
            <MessageList />
        </main>
    </div >
}