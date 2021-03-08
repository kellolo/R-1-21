import React from 'react';

import './style.scss';

export default (props) => {
    const { chatId } = props;
    return <header className="header-home">
        <p>Annagram</p>
        <p>{ chatId }</p>
    </header>;
};