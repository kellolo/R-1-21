import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default props => {
    const { sender, text } = props;

    return <li
        className='msg'
        style={{
            alignSelf: sender === 'BOT' ? 'flex-start' : 'flex-end'
        }}>
        <p className="msg__sender">
            {sender}
        </p>
        <p className='msg__text'>
            {text}
        </p>
    </li>;

}
