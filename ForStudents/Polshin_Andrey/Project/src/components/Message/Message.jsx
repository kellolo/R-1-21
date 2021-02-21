import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default props => {
    const { name, text, answerHandler } = props;

    return <li className='msg'>
        <p className='msg_text'>
            <a
                className='msg_btn-answer'
                href='#'
                onClick={answerHandler.bind(this, name)}>
                {name}:
            </a>
            {text}
        </p>
    </li>;

}
