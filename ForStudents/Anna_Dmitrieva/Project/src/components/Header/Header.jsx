import React from 'react';

import './style.scss';

export default (props) => {
    const { chatIdD } = props;
    return <header className="header-home">
        <p>Annagram</p>
        <p>{ chatIdD }</p>
    </header>;
};