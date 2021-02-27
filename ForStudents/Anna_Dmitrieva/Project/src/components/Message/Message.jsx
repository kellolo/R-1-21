import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default props => {
    const { name, text } = props;
    return <div className="msg-main">
        <div className={ name === 'Анна' ? 'msg-me' : 'msg-bot' }>
            <p className="msg-name"><b>{ name }</b></p>
            <p className="msg-text">{ text }</p>
        </div>
    </div>;
};