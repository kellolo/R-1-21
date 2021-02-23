import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default props => {
    const { name, text, ansferHandler } = props;

    return <li className='msg'>
        <p className='msg_text'>
            <a
                className='msg_btn-ansfer'
                href='#'
                onClick={ansferHandler.bind(this, name)}>
                {name}:
            </a>
            {text}
        </p>
    </li>;

}
