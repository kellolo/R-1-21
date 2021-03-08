import React from 'react';

import './style.scss';

export default props => {
    const { name, text } = props;

    return <li><b>{name}:</b> {text}</li>;
}