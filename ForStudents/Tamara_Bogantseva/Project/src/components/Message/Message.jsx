import React from 'react';

import './style.scss';


export default props => {
    const { name, text } = props;

    return <div className="msg-new">
        <p><b>{ name }</b></p>
        <p>{ text }</p>
    </div>;
}