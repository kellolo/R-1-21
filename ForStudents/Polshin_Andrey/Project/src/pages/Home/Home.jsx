import React from 'react';
import ReactDom from 'react-dom';
import MessageList from '@containers/MessageList';

import './style.scss';

export default () => {

    return <div className='wrapper' >
        <header className='header'>
            <h1 className="header_title">Lesson 2</h1>
        </header>
        <main className='main'>
            <MessageList />
        </main>
        <footer className='footer'>
            <h2 className="footer_copyright">@ by AndrewKolovrat</h2>
        </footer>
    </div >;
}
