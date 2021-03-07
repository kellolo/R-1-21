import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

// props === {
//     name: 'some',
//     text: 'lorem'
// }

export default props => {
    const { name, text } = props;

    return <div className='message'>
        <span className="message-name">{ name }</span>
        <p className="message-txt">{ text }</p>
    </div>;
}