import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default props => {
    const { name, text } = props;

    return <li
        className='msg'
        style={{
            alignSelf: name === 'BOT' ? 'flex-start' : 'flex-end'
        }}>
        <p className="msg__sender">
            {name}
        </p>
        <p className='msg__text'>
            {text}
        </p>
    </li>;

}
