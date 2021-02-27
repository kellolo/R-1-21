import React from 'react';
import ReactDom from 'react-dom';

import './style.scss';

export default props => {
    const { name, text } = props;

    return <div className="message">
        <span>{name}</span>
        <p>{text}</p>
    </div>
}